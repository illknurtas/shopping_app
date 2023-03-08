import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Product } from '../product/product';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class ProductService {

  path="http://localhost:3000/products";

  constructor( private http: HttpClient) { }
// PRODUCTS
  getProducts(categoryId):Observable<Product[]>{
    let newPath =this.path;
    if (categoryId){
      newPath+= "?categoryId="+categoryId
    }
    return this.http.get<Product[]>(newPath)
    .pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

// POSTING PRODUCT (ADD PRODUCT)
  addProduct(product: Product): Observable<Product>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':'Blank'
      })
    }
    return this.http.post<Product>(this.path,product,httpOptions)
    .pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
}

// ERROR HANDLING
  handleError(err: HttpErrorResponse){
    let errorMessage ="";
    if(err.error instanceof ErrorEvent) {
      errorMessage ="An error occurred" + err.error.message;
    }
    else{
      errorMessage = "A system error occurred" ;
    }
    return throwError(errorMessage);
  }


}
