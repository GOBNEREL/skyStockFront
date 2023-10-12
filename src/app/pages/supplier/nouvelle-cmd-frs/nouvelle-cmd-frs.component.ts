import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Article } from 'src/app/model/artricle';
import { CommandeFournisseur } from 'src/app/model/commandeFournisseur';
import { LigneCmdFrs } from 'src/app/model/ligneCmdFrs';
import { Supplier } from 'src/app/model/supplier';
import { ArticleService } from 'src/app/services/article/article.service';
import { CommandeFournisseurService } from 'src/app/services/commande-fournisseur/commande-fournisseur.service';
import { LigneCmdFrsService } from 'src/app/services/ligne-cmd-frs/ligne-cmd-frs.service';
import { SupplierService } from 'src/app/services/supplier/supplier.service';

@Component({
  selector: 'app-nouvelle-cmd-frs',
  templateUrl: './nouvelle-cmd-frs.component.html',
  styleUrls: ['./nouvelle-cmd-frs.component.scss']
})
export class NouvelleCmdFrsComponent implements OnInit {
  public suppliers: Supplier[] | undefined;

  public articles: Article[] | undefined;
  public ligneCmdFrs: LigneCmdFrs[] | undefined;


  constructor (private supplierService: SupplierService,
    private ligneCmdFrsService: LigneCmdFrsService,
    private articleService: ArticleService,
    private cmdFrsService: CommandeFournisseurService,
    private router: Router) { }

  ngOnInit() {
    this.getSuppliers();
    this.getArticles();
    this.getLigneCmdFrs();
  }

  public getSuppliers(): void {
    this.supplierService.getSuppliers().subscribe(
      (response: Supplier[]) => {
        this.suppliers = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public getLigneCmdFrs(): void {
    this.ligneCmdFrsService.getLigneCmdFrs().subscribe(
      (response: LigneCmdFrs[]) => {
        this.ligneCmdFrs = response;
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

  public onAddLigneCmdFrs(addForm: NgForm): void {
    console.log('okay');
  
    document.getElementById('add-article-form')?.click
    this.ligneCmdFrsService.addLigneCmdFrs(addForm.value).subscribe(
      (response: LigneCmdFrs) => {
        console.log(response);
        this.reloadComponent();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        console.log('okay2');
      }
    );
  }

  public onAddCmdFrs(addForm: NgForm): void {
    console.log('okay');
  
    document.getElementById('add-article-form')?.click
    this.cmdFrsService.addCommandeFournisseur(addForm.value).subscribe(
      (response: CommandeFournisseur) => {
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
    this.router.navigate(['commandesfournisseur']);
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
