import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Supplier } from 'src/app/model/supplier';
import { SupplierService } from 'src/app/services/supplier/supplier.service';

@Component({
  selector: 'app-modify-supplier',
  templateUrl: './modify-supplier.component.html',
  styleUrls: ['./modify-supplier.component.scss']
})
export class ModifySupplierComponent implements OnInit {

  constructor (private supplierService: SupplierService,
    private router: Router) { }

  ngOnInit() {
   
  }

  public onAddSupplier(addForm: NgForm): void {
    console.log('okay');
  
    document.getElementById('add-article-form')?.click
    this.supplierService.addSupplier(addForm.value).subscribe(
      (response: Supplier) => {
        console.log(response);
        this.pageSupplier();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        console.log('okay2');
      }
    );
  }

  
  pageSupplier(): void {
    this.router.navigate(['supplier']);
  }

}
