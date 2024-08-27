import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customers } from '../interfaces/customers';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  apiUrl = 'https://localhost:7149/api';
  url = `${this.apiUrl}/Customer`;

  constructor(private http: HttpClient) {}

  getAllData() {
    return this.http.get<Customers[]>(`${this.url}`);
  }
  getPageData(
    page: number,
    pageSize: number,
    companyName: string = '',
    contactName: string = '',
    contactTitle: string = ''
  ) {
    return this.http.get<Customers[]>(
      `${this.url}/${page}?companyName=${companyName}&contactName=${contactName}&contactTitle=${contactTitle}&pageSize=${pageSize}`
    );
  }
  getCount(
    companyName: string = '',
    contactName: string = '',
    contactTitle: string = ''
  ) {
    return this.http.get<number>(
      `${this.url}/count?companyName=${companyName}&contactName=${contactName}&contactTitle=${contactTitle}`
    );
  }
}
