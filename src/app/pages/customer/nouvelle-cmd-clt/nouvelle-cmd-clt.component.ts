import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Article } from 'src/app/model/artricle';
import { CommandeClient } from 'src/app/model/commandeClient';
import { CommandeFournisseur } from 'src/app/model/commandeFournisseur';
import { Customer } from 'src/app/model/customer';
import { LigneCmdClt } from 'src/app/model/ligneCmdClt';
import { LigneCmdFrs } from 'src/app/model/ligneCmdFrs';
import { Supplier } from 'src/app/model/supplier';
import { ArticleService } from 'src/app/services/article/article.service';
import { CommandeClientService } from 'src/app/services/commande-client/commande-client.service';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { LigneCmdCltService } from 'src/app/services/ligne-cmd-clt/ligne-cmd-clt.service';

@Component({
  selector: 'app-nouvelle-cmd-clt',
  templateUrl: './nouvelle-cmd-clt.component.html',
  styleUrls: ['./nouvelle-cmd-clt.component.scss']
})
export class NouvelleCmdCltComponent implements OnInit {
  public customers: Customer[] | undefined;

  public articles: Article[] | undefined;
  public ligneCmdClts: LigneCmdClt[] | undefined;


  constructor (private customerService: CustomerService,
    private ligneCmdCltService: LigneCmdCltService,
    private articleService: ArticleService,
    private cmdCltService: CommandeClientService,
    private router: Router) { }

  ngOnInit() {
    this.getCustomers();
    this.getArticles();
    this.getLigneCmdClt();
  }

  public getCustomers(): void {
    this.customerService.getCustomers().subscribe(
      (response: Customer[]) => {
        this.customers = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public getLigneCmdClt(): void {
    this.ligneCmdCltService.getLigneCmdClt().subscribe(
      (response: LigneCmdClt[]) => {
        this.ligneCmdClts = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
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

  public onAddLigneCmdClt(addForm: NgForm): void {
    console.log('okay');
  
    document.getElementById('add-article-form')?.click
    this.ligneCmdCltService.addLigneCmdClt(addForm.value).subscribe(
      (response: LigneCmdClt) => {
        console.log(response);
        this.reloadComponent();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        console.log('okay2');
      }
    );
  }

  public onAddCmdClt(addForm: NgForm): void {
    console.log('okay');
  
    document.getElementById('add-article-form')?.click
    this.cmdCltService.addCommandeClient(addForm.value).subscribe(
      (response: CommandeClient) => {
        console.log(response);
        this.pageCmdFrs();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        console.log('okay6');
      }
    );
  }

  pageCmdFrs(): void {
    this.router.navigate(['commandesclient']);
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
