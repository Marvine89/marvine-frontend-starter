import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, shareReplay, switchMap, map } from 'rxjs/operators';
import { ICard, IProduct } from '../../interfaces/product.interface';
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

  fetchCart(user_id: number): Observable<ICard> {
    return this.httpService.get<ICard>(`/carts/${user_id}`).pipe(
      shareReplay(),
      catchError(() => this.errorService.showError())
    );
  }

  fetchCartProducts(user_id: number): Observable<IUserProduct[]> {
    return this.fetchCart(user_id).pipe(
      switchMap((v) => {
        // switch map to get full product information and merge quality 
        const products = v.products.map((prod) => this.productService.fetchProduct(prod.id).pipe(map((prodR) => ({ ...prodR, quantity: prod.quantity }))));
        return forkJoin(products);
      }),
      catchError(() => this.errorService.showError())
    );
  }

  addToCard(user_id: number, product_id: number): Observable<any> {
    return this.fetchCart(user_id).pipe(
      switchMap((cart) => {
        const products = cart.products;
        const existingindex = products.findIndex((p) => p.id === product_id);

        // if product exist increase quantity, if not add new product to list
        if (existingindex > -1) {
          ++products[existingindex].quantity;
        } else {
          products.push({
            id: product_id,
            quantity: 1
          });
        }

        return this.httpService.put(`/carts/${user_id}`, { id: user_id, products })
      }),
      catchError(() => this.errorService.showError())
    );
  }
}
