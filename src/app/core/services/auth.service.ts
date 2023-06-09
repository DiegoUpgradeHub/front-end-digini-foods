import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //Definimos el endpoint y los headers para poder realizar la petición
  endpoint: string = 'https://back-end-digini-foods-vercel.vercel.app/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {}; //Aquí almacenaremos el usuario

  constructor(
    private http: HttpClient,
    public router: Router,
  ) { }

  //Registrar usuario
  signUp(user: User): Observable<any> {
    let api = `${this.endpoint}/register-user`;
    return this.http.post(api, user)
    .pipe(
      catchError(this.handleError)
    )
  };

  //Iniciar sesión
  signIn(user: User){
    return this.http.post<any>(`${this.endpoint}/signin`, user)
      .subscribe((res: any) => {
        //Para setear el token y el _id
        localStorage.setItem('access_token', res.token)
        localStorage.setItem('_id', res._id)
        //Volvemos al user-profile una vez ejecutada la función
        this.userProfile();
      })
  };

  //Obtener el token
  getToken() {
    return localStorage.getItem('access_token');
  }

  //Si está logeado
  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? true : false;
  }

  //No está logeado
  get isLoggedOut(): boolean {
    let authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? false : true;
  }

  //Cerrar sesión
  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    let id = localStorage.removeItem('_id');
    if (removeToken == null) {
      this.router.navigate(['home']);
    }
  }

  //Obtener el User profile
  getUserProfile(id: any): Observable<any> {
    let api = `${this.endpoint}/user-profile/${id}`;
    return this.http.get(api, { headers:this.headers }).pipe(
      map((res:any) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

  //ir al User Profile
  userProfile() {
    let id = localStorage.getItem('_id');
    this.router.navigate(['user-profile/' + id]);
  }

  //Editar usuario
  editUserProfile(user: User, id: string): Observable<any> {
    let api = `${this.endpoint}/update-user/${id}`;
    return this.http.put(api, user)
    .pipe(
      catchError(this.handleError)
    )
  };

  //Eliminar usuario
  deleteUser(id: string): Observable<any> {
    let api = `${this.endpoint}/delete-user/${id}`;
    return this.http.delete(api)
    .pipe(
      catchError(this.handleError)
    )
  };

  //Crear usuario
  createUser(user: User): Observable<any> {
    let api = `${this.endpoint}/register-user`;
    return this.http.post(api, user)
    .pipe(
      catchError(this.handleError)
    )
  };

  //Obtener todos los usuarios
  getUsers(): Observable<any> {
    let api = `${this.endpoint}/user/`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res: any) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

  // Error
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      //client-side error
      msg = error.error.message;
    } else {
      // server side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }

}

