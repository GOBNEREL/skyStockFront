import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.scss']
})
export class NewCustomerComponent implements OnInit {

  constructor (private customerService: CustomerService,
    private router: Router) { }

  ngOnInit() {
   
  }

  public onAddCustomer(addForm: NgForm): void {
    console.log('okay');
  
    document.getElementById('add-article-form')?.click
    this.customerService.addCustomer(addForm.value).subscribe(
      (response: Customer) => {
        console.log(response);
        this.pageCustomer();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        console.log('okay2');
      }
    );
  }

  
  pageCustomer(): void {
    this.router.navigate(['customer']);
  }

}