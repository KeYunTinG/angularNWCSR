import { Component, OnInit, signal } from '@angular/core';
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
  currentPage = signal<number>(1);
  //每頁資料數
  pageSize = signal<number>(20);
  //總頁數
  totalPages = signal<number>(0);
  //資料筆數
  totalDatas: number = 0;

  constructor(private customersService: CustomersService) {}

  ngOnInit(): void {
    this.loadCustomers(this.currentPage(), this.pageSize());
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
  //計算總頁數
  getPageCount() {
    this.customersService.getCount().subscribe((count) => {
      this.totalPages.set(Math.ceil(count / this.pageSize()));
      this.totalDatas = count;
    });
  }

  //由子組件觸發
  onPageChange(newPage: number) {
    // 更新當前頁碼
    this.currentPage.set(newPage);
    this.loadCustomers(this.currentPage(), this.pageSize());
  }
  // 顯示筆數變化
  pageSizeChange(pageSize: number) {
    this.loadCustomers(this.currentPage(), pageSize);
    this.getPageCount();
  }
}
