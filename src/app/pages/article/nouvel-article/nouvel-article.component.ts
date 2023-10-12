import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Article } from 'src/app/model/artricle';
import { Category } from 'src/app/model/category';
import { ArticleService } from 'src/app/services/article/article.service';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-nouvel-article',
  templateUrl: './nouvel-article.component.html',
  styleUrls: ['./nouvel-article.component.scss']
})
export class NouvelArticleComponent implements OnInit {
  public categories: Category[] | undefined;


  constructor (private articleService: ArticleService,
    private categoryService: CategoryService,
    private router: Router) { }

  ngOnInit() {
    this.getCategories();
  }

  public getCategories(): void {
    this.categoryService.getCategories().subscribe(
      (response: Category[]) => {
        this.categories = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
  
  public onAddArticle(addForm: NgForm): void {
    console.log('okay');
  
    document.getElementById('add-article-form')?.click
    this.articleService.addArticle(addForm.value).subscribe(
      (response: Article) => {
        console.log(response);
        this.pageArticle();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        console.log('okay2');
      }
    );
  }

  
  pageArticle(): void {
    this.router.navigate(['articles']);
  }

}
