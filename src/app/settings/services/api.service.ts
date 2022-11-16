import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {catchError, delay, Observable, retry, tap, throwError} from "rxjs";
import {IProduct} from "../interfaces/iproduct";
import {ErrorService} from "./error.service";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public products:IProduct[];
  constructor(private http: HttpClient, private errorServ: ErrorService) {
    this.products = [];
  }

  getAall(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('https://fakestoreapi.com/products', {
      params: new HttpParams({
        // fromString: 'limit=5'
        fromObject: {limit: 3}
      })
    }).pipe(
      delay(2000),
      retry(2),
      tap(prducts => this.products = prducts),
      catchError(this.errorHandler.bind(this))
    );
  }

  addProduct(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>('https://fakestoreapi.com/products', product).pipe(
      tap(product => this.products.push(product))
    )
  }


  private errorHandler(error: HttpErrorResponse) {
    this.errorServ.handler(error.message)
    return throwError(() => error.message)
  }
}
