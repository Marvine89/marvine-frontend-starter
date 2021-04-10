import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl: string = environment.apiUrl;
  headers = new HttpHeaders();

  constructor(private http: HttpClient) {
    this.headers.append('Content-Type', 'application/json');
  }

  get<T>(path: string): Observable<T> {
    return this.http.get<T>(this.baseUrl + path, { headers: this.headers });
  }

  post<T>(path: string, data: any): Observable<T> {
    return this.http.post<T>(this.baseUrl + path, data);
  }

  put<T>(path: string, data: any): Observable<T> {
    return this.http.put<T>(this.baseUrl + path, data);
  }

  delete<T>(path: string): Observable<T> {
    return this.http.delete<T>(this.baseUrl + path, { headers: this.headers });
  }
}
