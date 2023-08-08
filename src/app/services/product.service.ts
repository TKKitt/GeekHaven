import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  datasource: string = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.datasource);
  }

  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(this.datasource + '/' + id);
  }

  createProduct(product: Product) {
    return this.http.post(this.datasource, product);
  }

  deleteProduct(id: string) {
    return this.http.delete(this.datasource + '/' + id);
  }

  editProduct(id: string, edittedProduct: Product) {
    return this.http.put(this.datasource + '/' + id, edittedProduct);
  }
}
