import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Article } from 'src/app/model/artricle';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-modify-category',
  templateUrl: './modify-category.component.html',
  styleUrls: ['./modify-category.component.scss']
})
export class ModifyCategoryComponent implements OnInit {

  constructor (private categoryService: CategoryService,
    private router: Router) { }

  ngOnInit() {
   
  }

  public onAddCategory(addForm: NgForm): void {
    console.log('okay');
  
    document.getElementById('add-article-form')?.click
    this.categoryService.addCategory(addForm.value).subscribe(
      (response: Category) => {
        console.log(response);
        this.pageCategory();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        console.log('okay2');
      }
    );
  }

  
  pageCategory(): void {
    this.router.navigate(['categorie']);
  }

}
