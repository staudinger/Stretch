import { Injectable } from '@angular/core';
import { Grocery } from 'src/app/grocery';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GroceryService 
{
  private httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json'
      }
    )
  };
  private groceryUrl =  'http://localhost:3000/Groceries';

  //Returns asynchronous data  (observable)
  getGroceries(): Observable<Grocery[]>
  {
    //expecting an array of Grocery objects
    return this.http.get<Grocery[]>(this.groceryUrl).pipe
    (
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  addGrocery (grocery: Grocery): Observable<Grocery> 
  {
    return this.http.post<Grocery>(this.groceryUrl, grocery, this.httpOptions)
     .pipe(catchError(this.handleError));
  }

  updateGrocery (grocery: Grocery): Observable<Grocery> 
  {
    return this.http.put<Grocery>(this.groceryUrl, grocery)
    .pipe(catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) 
  {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }


  // angular initializes http by injecting the Httpclient instance
  constructor(private http: HttpClient) { }
}
