import {
  Component,
  computed,
  EventEmitter,
  Input,
  OnInit,
  Output,
  signal,
  OnChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css',
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() page = 1;
  @Input() pageTotal = 1;
  @Input() pageSize = 10;
  @Input() pageNumbers: number[] = [];

  @Output() pageChange = new EventEmitter<number>();
  @Output() pageSizeChange = new EventEmitter<number>();

  // 目前頁碼
  currentPage = signal(1);

  // 上一頁頁碼
  previousPage = computed(() => {
    // 檢查頁碼是否大於 1
    return this.currentPage() > 1 ? this.currentPage() - 1 : this.currentPage();
  });
  // 下一頁頁碼
  nextPage = computed(() => {
    // 檢查頁碼是否小於總頁數
    return this.currentPage() < this.pageTotal
      ? this.currentPage() + 1
      : this.currentPage();
  });

  constructor() {}
  ngOnInit(): void {}
  ngOnChanges() {
    // 根據 @Input() 初始頁碼狀態
    this.currentPage.set(this.page);
    this.setPageNumber(this.currentPage(), this.pageTotal);
  }

  goPrevious() {
    this.jumpTo(this.currentPage() - 1);
    this.setPageNumber(this.currentPage(), this.pageTotal);
  }

  goNext() {
    this.jumpTo(this.currentPage() + 1);
    this.setPageNumber(this.currentPage(), this.pageTotal);
  }

  jumpTo(num: number) {
    // 頁碼不可以小於 1 或大於總頁碼
    if (num < 1 || num > this.pageTotal) {
      return;
    }
    // 送出目前頁碼變更的訊號
    this.currentPage.set(num);
    // 觸發事件
    this.pageChange.emit(num);
    this.setPageNumber(this.currentPage(), this.pageTotal);
  }

  //產生頁碼
  setPageNumber(page: number, total: number) {
    if (page < 10) {
      this.pageNumbers = Array.from(
        { length: total > 10 ? 10 : total },
        (_, i) => 1 + i
      );
    } else {
      const startPage = (Math.floor((page - 11) / 10) + 1) * 10 + 1;
      const endPage = startPage + 9 > total ? total : startPage + 9;
      this.pageNumbers = Array.from(
        { length: endPage - startPage + 1 },
        (_, i) => startPage + i
      );
    }
  }
  //每筆頁數變化
  pageSizeSet() {
    this.pageSizeChange.emit(this.pageSize);
  }
}
