import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Article } from 'src/app/model/artricle';
import { ArticleService } from 'src/app/services/article/article.service';

@Component({
  selector: 'app-modify-article',
  templateUrl: './modify-article.component.html',
  styleUrls: ['./modify-article.component.scss']
})
export class ModifyArticleComponent implements OnInit {

  constructor (private articleService: ArticleService,
    private router: Router) { }

  ngOnInit() {
   
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
