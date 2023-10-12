import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Supplier } from 'src/app/model/supplier';
import { SupplierService } from 'src/app/services/supplier/supplier.service';

@Component({
  selector: 'app-detail-supplier',
  templateUrl: './detail-supplier.component.html',
  styleUrls: ['./detail-supplier.component.scss']
})
export class DetailSupplierComponent implements OnInit {

  public suppliers: Supplier[] | undefined;

  constructor (private supplierService: SupplierService,
    private router: Router) { }

  ngOnInit() {
    this.getSuppliers();
  }

  public getSuppliers(): void {
    this.supplierService.getSuppliers().subscribe(
      (response: Supplier[]) => {
        this.suppliers = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }


  public onDeleteSupplier(supplierId: number): void {
      this.supplierService.deleteSupplier(supplierId).subscribe(
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

  modifySupplier(): void {
    this.router.navigate(['modifysupplier']);
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
