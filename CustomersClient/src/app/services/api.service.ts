import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiBase = "/api/";
  private get httpOptions() {
    return {
      headers: new HttpHeaders(
        { 'Content-Type': 'application/json' }
      )
    }
  }
  constructor(private _http: HttpClient) { }

  post(action: string, data: any) {
    return this._http.post(this.apiBase + action, data, this.httpOptions).pipe(
      mergeMap((result: any) => {
        if (result.success === true) {
          return of(result.data);
        }
        else {
          return this.handleError(result.message)
        }
      }))
  }

  put(action: string, data: any) {
    return this._http.put(this.apiBase + action, data, this.httpOptions).pipe(
      mergeMap((result: any) => {
        if (result.success === true) {
          return of(result.data);
        }
        else {
          return this.handleError(result.message)
        }
      }))
  }

  handleError(message: string): any {
    alert('error');
    console.log(message);
  }
}
