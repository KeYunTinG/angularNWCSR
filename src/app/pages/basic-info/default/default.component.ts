import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersService } from '../../../services/customers.service';
import { Customers } from '../../../interfaces/customers';
import { PaginationComponent } from '../../../components/pagination/pagination.component';

@Component({
  selector: 'app-default',
  standalone: true,
  imports: [CommonModule, PaginationComponent],
  templateUrl: './default.component.html',
  styleUrl: './default.component.css',
})
export class DefaultComponent implements OnInit {
  customers: Customers[] = [];
  //當前頁數
  currentPage: number = 1;
  //每頁資料數
  pageSize: number = 10;
  //總頁數
  totalPages: number = 10;

  constructor(private customersService: CustomersService) {}

  ngOnInit(): void {
    this.loadCustomers(this.currentPage, this.pageSize);
    this.getPageCount();
  }

  //換頁
  loadCustomers(page: number, pageSize: number): void {
    this.customersService
      .getPageData(page, pageSize)
      .subscribe((data: Customers[]) => {
        this.customers = data;
      });
  }
  getPageCount() {
    this.customersService.getCount().subscribe((count) => {
      this.totalPages = Math.ceil(count / this.pageSize);
    });
  }

  //由html觸發
  onPageChange(newPage: number) {
    // 更新當前頁碼
    this.currentPage = newPage;
    this.loadCustomers(this.currentPage, this.pageSize);
  }
}
