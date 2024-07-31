import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { product_category_model, product_model } from '../model';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  // private apiUrl = 'http://localhost:3000/artist';

  constructor(private http: HttpClient) {}

  // product for admin and user

  getProductDetails(): Observable<any> {
    return this.http.get<any>(`https://hiradecor.beatsacademy.in/allProducts/`);
  }
  getProductDetailsById(pid: number): Observable<any> {
    return this.http.get<any>(
      `https://hiradecor.beatsacademy.in/productDetails/${pid}/`
    );
  }

  ProductsPost(data: any): Observable<any> {
    return this.http.post(
      `https://hiradecor.beatsacademy.in/createProduct/`,
      data
    );
  }

  deleteProductById(pid: any): Observable<any> {
    return this.http.delete<any>(
      `https://hiradecor.beatsacademy.in/deleteProduct/${pid}/`,
      pid
    );
  }

  updateProductById(pid: number, data: any): Observable<any> {
    return this.http.put<any>(
      `https://hiradecor.beatsacademy.in/updateProduct/${pid}`,
      data
    );
  }

  // product category for Admin
  getAllProductCategories(): Observable<any> {
    return this.http.get<any>(
      `https://hiradecor.beatsacademy.in/allCategories/`
    );
  }

  getProductCategoriesById(cid: number): Observable<any> {
    return this.http.get<any>(
      `https://hiradecor.beatsacademy.in/categoryDetails/${cid}/`
    );
  }

  updateProductCategories(
    cid: number,
    data: product_category_model
  ): Observable<any> {
    return this.http.put<product_model>(
      `https://hiradecor.beatsacademy.in/updateCategory/${cid}`,
      data
    );
  }

  postProductCategories(data: any): Observable<any> {
    return this.http.post<any>(
      `https://hiradecor.beatsacademy.in/createCategory/`,
      data
    );
  }

  deleteArtistCategoriesById(cid: any): Observable<any> {
    return this.http.delete<any>(
      `https://hiradecor.beatsacademy.in/deleteCategory/${cid}/`,
      cid
    );
  }
}
