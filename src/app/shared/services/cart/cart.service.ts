import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, shareReplay, switchMap, map } from 'rxjs/operators';
import { ICard } from '../../interfaces/product.interface';
import { ErrorService } from '../error/error.service';
import { HttpService } from '../http/http.service';
import { forkJoin } from 'rxjs';
import { ProductService } from '../product/product.service';
import { IUserProduct } from '../../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(
    private httpService: HttpService,
    private productService: ProductService,
    private errorService: ErrorService) { }

  fetchCart(userId: number): Observable<ICard> {
    return this.httpService.get<ICard>(`/carts/${userId}`).pipe(
      shareReplay(),
      catchError(() => this.errorService.showError())
    );
  }

  fetchCartProducts(userId: number): Observable<IUserProduct[]> {
    return this.fetchCart(userId).pipe(
      switchMap((v) => {
        // switch map to get full product information and merge quality
        const products = v.products.map((prod) => this.productService
          .fetchProduct(prod.id).pipe(map((prodR) => ({ ...prodR, quantity: prod.quantity }))));
        return forkJoin(products);
      }),
      catchError(() => this.errorService.showError())
    );
  }

  addToCard(userId: number, productId: number): Observable<any> {
    return this.fetchCart(userId).pipe(
      switchMap((cart) => {
        const products = cart.products;
        const existingindex = products.findIndex((p) => p.id === productId);

        // if product exist increase quantity, if not add new product to list
        if (existingindex > -1) {
          ++products[existingindex].quantity;
        } else {
          products.push({
            id: productId,
            quantity: 1
          });
        }

        return this.httpService.put(`/carts/${userId}`, { id: userId, products });
      }),
      catchError(() => this.errorService.showError())
    );
  }

  deleteCart(userId: number, productId: number): Observable<any> {
    return this.httpService.delete(`/carts/${userId}/products/${productId}`).pipe(
      catchError(() => this.errorService.showError())
    );
  }
}
