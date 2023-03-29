import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  //Definimos el endpoint y header para hacer la API request
  endpoint: string = 'http://localhost:4000/api';
  //Este endpoint funciona si está desplegado en Vercel
  // endpoint: string = 'https://backend-restaurant-menu.vercel.app';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor (
    private http: HttpClient,
    public router: Router
    ) { }

  //Obtener todos los productos
  getProducts(): Observable<any> {
    let api = `${this.endpoint}/products/`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res: any) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

  //Obtener producto por nombre
  getProduct(name: string): Observable<any> {
    return this.http.get(`${this.endpoint}/products/name/${name}`)
  }

  //Obtener producto por categoría
  getProductCategory(category: string): Observable<any> {
    return this.http.get(`${this.endpoint}/products/category/${category}`)
  }

  //Obtener producto por restaurante
  getProductRestaurant(restaurant: string): Observable<any> {
    return this.http.get(`${this.endpoint}/products/restaurant/${restaurant}`)
  }

  //Crear un producto
  createProduct(product: Product): Observable<any> {
    let api = `${this.endpoint}/products/create`;
    return this.http.post(api, product)
    .pipe(
      catchError(this.handleError)
    )
  };

  //Editar un producto
  editProduct(product: Product ): Observable<any> {
    let id = product._id
    let api = `${this.endpoint}/products/edit/${id}`;
    return this.http.put(api, product)
    .pipe(
      catchError(this.handleError)
    )
  };

  //Eliminar un producto
  deleteProduct(product: Product): Observable<any> {
    console.log(product);
    let id = product._id
    let api = `${this.endpoint}/products/delete/${id}`;
    console.log(api)
    return this.http.delete(api)
    .pipe(
      catchError(this.handleError)
    )
  };

  // Gestión de errores
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }

}
