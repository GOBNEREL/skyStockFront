import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Article } from 'src/app/model/artricle';
import { Category } from 'src/app/model/category';
import { ArticleService } from 'src/app/services/article/article.service';
import { CategoryService } from 'src/app/services/category/category.service';
import { TransferService } from 'src/app/services/transfer/transfer.service';

@Component({
  selector: 'app-modify-article',
  templateUrl: './modify-article.component.html',
  styleUrls: ['./modify-article.component.scss']
})
export class ModifyArticleComponent implements OnInit {

  public articles: Article[] | undefined;

  public categories: Category[] | undefined;

  art: Article;

  constructor (private articleService: ArticleService,
    private dataTransferService: TransferService,
    private categoryService: CategoryService,
    private router: Router) {
      this.art = this.dataTransferService.getData();
     }

  ngOnInit() {
    this.getArticles();
    this.getCategories();
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

  public onEditArticle(article: Article): void {
    console.log('okay');
    document.getElementById('add-article-form')?.click();
      this.articleService.updateArticle(article).subscribe(
        (response: Article) => {
          console.log(response);
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
      this.pageArticle();
  }

  public getArticles(): void {
    this.articleService.getArticles().subscribe(
      (response: Article[]) => {
        this.articles = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
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

}
