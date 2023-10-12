import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-category',
  templateUrl: './page-category.component.html',
  styleUrls: ['./page-category.component.scss']
})
export class PageCategoryComponent implements OnInit {

  test: string = 'test okay deplete ';
  constructor(private router: Router) {}

  ngOnInit(): void {
    
  }

  nouveleCategory(): void {
    this.router.navigate(['nouvelecategorie'])
  }

}
