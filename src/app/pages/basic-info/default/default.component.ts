import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersService } from '../../../services/customers.service';
import { Customers } from '../../../interfaces/customers';

@Component({
  selector: 'app-default',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './default.component.html',
  styleUrl: './default.component.css',
})
export class DefaultComponent implements OnInit {
  customers: Customers[] = [];
  constructor(private customersService: CustomersService) {}

  ngOnInit(): void {
    this.customersService.getAllData().subscribe((data: Customers[]) => {
      this.customers = data;
      //console.log('Customers:', this.customers); // 確保打印正確
    });
  }
}
