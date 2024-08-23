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
  //總頁數
  totalPages: number = 10;
  //每頁資料數
  pageSize: number = 10;

  constructor(private customersService: CustomersService) {}

  ngOnInit(): void {
    this.loadCustomers(this.currentPage, this.pageSize);
  }

  //換頁
  loadCustomers(page: number, pageSize: number): void {
    this.customersService
      .getPageData(page, pageSize)
      .subscribe((data: Customers[]) => {
        this.customers = data;
      });
  }

  //由html觸發
  onPageChange(newPage: number) {
    // 更新當前頁碼
    this.currentPage = newPage;
    // 在控制台中輸出變更的頁碼
    console.log('頁碼變更為:', newPage);
    this.loadCustomers(this.currentPage, this.pageSize);
  }
}
