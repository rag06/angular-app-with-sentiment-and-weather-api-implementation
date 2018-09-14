import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse,HttpHeaders ,HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import {catchError,map ,tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private appid = '606633d3a0a4a3c9182373dff3bc7ed3';//
  private weatherData: any;

  constructor(private http: HttpClient) { }

  public getWeatherDetails (location): Observable<HttpResponse<any>> {
    console.log('hi weather  service');

   return this.http.get<any>('http://api.openweathermap.org/data/2.5/weather', {
      params:{q: location, appid: this.appid}
      //, observe: 'response'
    }).pipe(
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
