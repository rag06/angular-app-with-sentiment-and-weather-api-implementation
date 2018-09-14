import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpResponse  } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {catchError,map ,tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SentimentService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  private body ;
  constructor(private http: HttpClient) { }

  public getAnalysis (sentimentText): Observable<HttpResponse<any>> {
    console.log('hi sentiment service');
    return this.http.post<any>('http://localhost:3000/', {"text" : sentimentText}, this.httpOptions ).pipe(
        catchError(this.handleError('weatherApi', []))
      );
  }
  private handleError (operation = 'operation', result) {
    return (error: any): Observable<any> => {
    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead
    // TODO: better job of transforming error for user consumption
    //this.log(`${operation} failed: ${error.message}`);
    // Let the app keep running by returning an empty result.
    result = {
      status: error.status,
      errorCode: error.statusText
    }
    console.log(result);
    return of(result);
    };
  }
}
