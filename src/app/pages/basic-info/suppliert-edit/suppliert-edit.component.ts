import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-suppliert-edit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './suppliert-edit.component.html',
  styleUrl: './suppliert-edit.component.css',
})
export class SuppliertEditComponent {
  Form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.Form = this.fb.group({
      // 申請日期
      date: [''],
      // 統一編號
      unifiedNumber: [''],
      // 廠商名稱
      client: [''],
      // 利害關係人
      stakes: [''],
      // 匯款戶名
      accountName: [''],
      // 匯款帳號
      ACNo: [''],
      // 解款行號
      bankNo: [''],
      // 匯款方式
      method: [''],
      // 匯費
      tax: [''],
      // 往來狀態
      contactStatus: [''],
      // 收件人信箱
      email: ['', [Validators.required, Validators.email]],
      // 聯絡窗口
      contact: [''],
      // 登錄人員
      staff: [''],
      // 登錄日期
      loginDate: [''],
      // 覆核人員
      reviewer: [''],
      // 覆核日期
      reviewerDate: [''],
      // 狀態
      state: [''],
    });
  }
  submitForm() {
    alert('送出成功');
    console.log(this.Form.value);
  }
  demo() {
    const incorrectDate = '2024-08-28';

    this.Form.patchValue({
      date: incorrectDate,
      unifiedNumber: '83202333',
      client: '鎧鈞數位有限公司',
      stakes: 'false',
      accountName: '鎧鈞數位有限公司',
      ACNo: '0406940028777',
      bankNo: '8080406',
      method: '1',
      tax: '2',
      contactStatus: 'true',
      email: 'mygo@uitc.com.tw',
      contact: '木須龍',
      staff: '洪嘉玲',
      loginDate: incorrectDate,
      reviewer: '洪嘉玲',
      reviewerDate: incorrectDate,
      state: 'true',
    });
  }
}
