import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersService } from '../../../services/customers.service';
import { Customers } from '../../../interfaces/customers';
import { PaginationComponent } from '../../../components/pagination/pagination.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-default',
  standalone: true,
  imports: [CommonModule, PaginationComponent, ReactiveFormsModule],
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
  //搜尋用表單
  searchForm: FormGroup;

  constructor(
    private customersService: CustomersService,
    private fb: FormBuilder
  ) {
    this.searchForm = this.fb.group({
      // 單位
      unit: [''],
      // 科別
      department: [''],
      // 員編
      employeeNumber: [''],
      // 姓名
      name: [''],
    });
  }

  ngOnInit(): void {
    this.loadCustomers(this.currentPage(), this.pageSize());
    this.getPageCount();
  }

  //換頁
  loadCustomers(
    page: number,
    pageSize: number,
    companyName: string = '',
    contactName: string = '',
    contactTitle: string = ''
  ): void {
    this.customersService
      .getPageData(page, pageSize, companyName, contactName, contactTitle)
      .subscribe((data: Customers[]) => {
        this.customers = data;
      });
  }
  //計算總頁數
  getPageCount(
    companyName: string = '',
    contactName: string = '',
    contactTitle: string = ''
  ) {
    this.customersService
      .getCount(companyName, contactName, contactTitle)
      .subscribe((count) => {
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
    this.currentPage.set(1);
    this.loadCustomers(this.currentPage(), pageSize);
    this.getPageCount();
  }
  //搜尋功能
  submitForm() {
    const formValues = this.searchForm.value;
    const { unit, department, employeeNumber, name } = formValues;
    this.currentPage.set(1);
    this.loadCustomers(
      this.currentPage(),
      this.pageSize(),
      department,
      employeeNumber,
      name
    );
    this.getPageCount(department, employeeNumber, name);
  }
}
