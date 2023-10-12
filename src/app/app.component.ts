import { Component, OnInit } from '@angular/core';
import { Article } from './model/artricle';
import { ArticleService } from './services/article/article.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  public articles: Article[] | undefined;

  // title = 'SkyStockFront';

  constructor (private articleService: ArticleService) { }

  ngOnInit() {
    this.getArticles();
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
}
