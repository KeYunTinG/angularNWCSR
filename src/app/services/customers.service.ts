import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Customers } from '../interfaces/customers';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  mainUrl = 'https://localhost:7149/api/Customer/1?pageSize=10';

  constructor(private http: HttpClient) {}

  getAllData() {
    return this.http.get<Customers[]>(`${this.mainUrl}`);
  }
  // getAllData(): Observable<Customers[]> {
  //   return this.http.get<Customers[]>(`${this.mainUrl}`).pipe(
  //     catchError((error) => {
  //       console.error('Error fetching data', error);
  //       return throwError(() => new Error('Error fetching data'));
  //     })
  //   );
  // }
}
