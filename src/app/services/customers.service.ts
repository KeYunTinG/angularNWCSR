import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customers } from '../interfaces/customers';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  mainUrl = 'https://localhost:7149/api';
  keyUrl = `${this.mainUrl}/Customer`;

  constructor(private http: HttpClient) {}

  getAllData() {
    return this.http.get<Customers[]>(`${this.keyUrl}`);
  }
  getPageData(page: number, pageSize: number) {
    return this.http.get<Customers[]>(
      `${this.keyUrl}/${page}?pageSize=${pageSize}`
    );
  }
  getCount() {
    return this.http.get<number>(`${this.keyUrl}/count`);
  }
}
