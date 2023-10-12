import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-detail-customer',
  templateUrl: './detail-customer.component.html',
  styleUrls: ['./detail-customer.component.scss']
})
export class DetailCustomerComponent implements OnInit {

  public customers: Customer[] | undefined;

  constructor (private customerService: CustomerService,
    private router: Router) { }

  ngOnInit() {
    this.getCustomers();
  }

  public getCustomers(): void {
    this.customerService.getCustomers().subscribe(
      (response: Customer[]) => {
        this.customers = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public onDeleteCustomer(customerId: number): void {
      this.customerService.deleteCustomer(customerId).subscribe(
        (response: void) => {
          console.log(response);
          this.reloadComponent();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
          console.log('this is the error');
        }
      );
  }

  modifyCustomer(): void {
    this.router.navigate(['modifycustomer']);
  }

  private reloadComponent(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };

    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigateByUrl(currentUrl);
    });
  }

}
