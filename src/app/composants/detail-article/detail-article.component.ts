import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/model/artricle';
import { ArticleService } from 'src/app/services/article/article.service';
import { TransferService } from 'src/app/services/transfer/transfer.service';

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.scss']
})
export class DetailArticleComponent implements OnInit {

  public articles: Article[] | undefined;

  constructor (private articleService: ArticleService,
    private dataTransferService: TransferService,
    private router: Router) { }

  ngOnInit() {
    this.getArticles();
    this.reloadComponent();
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

  public onDeleteArticle(articleId: number): void {
      this.articleService.deleteArticle(articleId).subscribe(
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

  modifyArticle(article: Article): void {
    this.dataTransferService.setData(article);
    this.router.navigate(['modifyarticle']);
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
