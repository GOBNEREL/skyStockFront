import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-supplier',
  templateUrl: './page-supplier.component.html',
  styleUrls: ['./page-supplier.component.scss']
})
export class PageSupplierComponent implements OnInit {

  test: string = 'test okay deplete ';
  constructor(private router: Router) {}

  ngOnInit(): void {
    
  }

  newSupplier(): void {
    this.router.navigate(['newsupplier'])
  }

}
