import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private http: HttpClient) { }

  public getData(): Observable<any> {
    const url = 'https://jsonplaceholder.typicode.com/todos';
    return this.http.get<any>(url);
  }

}
