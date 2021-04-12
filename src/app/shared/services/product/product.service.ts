import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, shareReplay, switchMap } from 'rxjs/operators';
import { IProduct } from '../../interfaces/product.interface';
import { CartService } from '../cart/cart.service';
import { ErrorService } from '../error/error.service';
import { HttpService } from '../http/http.service';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(
    private httpService: HttpService,
    private errorService: ErrorService,
    private userService: UserService,
    private cartSerice: CartService) { }

  fetchProducts(page: number = 1): Observable<IProduct[]> {
    return this.httpService.get<IProduct[]>(`/products?_page=${page}&_limit=12`).pipe(
      catchError(() => this.errorService.showError())
    );
  }

  searchProducts(keyword: string = ""): Observable<IProduct[]> {
    return this.httpService.get<IProduct[]>(`/products?q=${keyword}`).pipe(
      shareReplay(),
      catchError(() => this.errorService.showError())
    );
  }

  fetchProduct(product_id: number): Observable<IProduct> {
    return this.httpService.get<IProduct>(`/products/${product_id}`).pipe(
      shareReplay(),
      catchError(() => this.errorService.showError())
    );
  }


  addProduct(product: IProduct): Observable<IProduct> {
    return this.httpService.post<IProduct>("/products", product).pipe(
      catchError(() => this.errorService.showError())
    );
  }

  updateProduct(id: number, product: IProduct): Observable<IProduct> {
    return this.httpService.put<IProduct>(`/products/${id}`, product).pipe(
      catchError(() => this.errorService.showError())
    );
  }

  deleteProduct(product_id: number): Observable<any> {
    const userId = this.userService.getUserId || 0;
    return this.httpService.delete(`/products/${product_id}`).pipe(
      switchMap(() => this.cartSerice.deleteCart(userId, product_id)),
      catchError(() => this.errorService.showError())
    );
  }
}
