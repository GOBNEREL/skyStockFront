import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-customer',
  templateUrl: './page-customer.component.html',
  styleUrls: ['./page-customer.component.scss']
})
export class PageCustomerComponent implements OnInit {

  test: string = 'test okay deplete ';
  constructor(private router: Router) {}

  ngOnInit(): void {
    
  }

  newCustomer(): void {
    this.router.navigate(['newcustomer'])
  }
}
