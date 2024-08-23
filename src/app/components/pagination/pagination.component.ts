import {
  Component,
  computed,
  EventEmitter,
  Input,
  OnInit,
  Output,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css',
})
export class PaginationComponent implements OnInit {
  @Input() page = 1;
  @Input() pageCount = 1;
  @Input() pageNumbers: number[] = [];

  @Output() pageChange = new EventEmitter<number>();

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
    return this.currentPage() < this.pageCount
      ? this.currentPage() + 1
      : this.currentPage();
  });

  ngOnInit() {
    // 根據 @Input() 初始頁碼狀態
    this.currentPage.set(this.page);
    this.setPageNumber();
  }

  jumpTo(num: number) {
    // 頁碼不可以小於 1 或大於總頁碼
    if (num < 1 || num > this.pageCount) {
      return;
    }

    // 送出目前頁碼變更的訊號
    this.currentPage.set(num);

    // 觸發事件
    this.pageChange.emit(num);
    this.setPageNumber();
  }

  goPrevious() {
    this.jumpTo(this.currentPage() - 1);
    this.setPageNumber();
  }

  goNext() {
    this.jumpTo(this.currentPage() + 1);
    this.setPageNumber();
  }
  //產生頁碼
  setPageNumber() {
    if (this.currentPage() < 10) {
      this.pageNumbers = Array.from({ length: 10 }, (_, i) => 1 + i);
    } else {
      const startPage =
        (Math.floor((this.currentPage() - 11) / 10) + 1) * 10 + 1;
      const endPage =
        startPage + 9 > this.pageCount ? this.pageCount : startPage + 9;
      this.pageNumbers = Array.from(
        { length: endPage - startPage + 1 },
        (_, i) => startPage + i
      );
    }
  }
}
