import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private httpService: HttpService) { }

  fetchProducts(page: number = 1): Observable<any> {
    return this.httpService.get(`/products?_page=${page}&_limit=12`);
  }

  searchProducts(keyword: string = ""): Observable<any> {
    return this.httpService.get(`/products?q=${keyword}`);
  }

  fetchProduct(product_id: number): Observable<any> {
    return this.httpService.get(`/products/${product_id}`);
  }

  fetchCard(user_id: number): Observable<any> {
    return this.httpService.get(`/carts/${user_id}`);
  }

  addProduct(product: any): Observable<any> {
    return this.httpService.post("/products", product);
  }

  addToCard(user_id: number, product: any): Observable<any> {
    return this.httpService.post(`/carts/${user_id}`, product);
  }

  updateProduct(user_id: number, product_id: any): Observable<any> {
    return this.httpService.put(`/products/${user_id}`, product_id);
  }

  deleteProduct(user_id: number): Observable<any> {
    return this.httpService.delete(`/products/${user_id}`);
  }

  deleteProductToCard(user_id: number, product_id: number): Observable<any> {
    return this.httpService.delete(`/carts/${user_id}/${product_id}`);
  }
}
