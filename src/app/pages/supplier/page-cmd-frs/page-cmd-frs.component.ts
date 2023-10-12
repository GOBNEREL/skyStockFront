import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommandeFournisseur } from 'src/app/model/commandeFournisseur';
import { CommandeFournisseurService } from 'src/app/services/commande-fournisseur/commande-fournisseur.service';

@Component({
  selector: 'app-page-cmd-frs',
  templateUrl: './page-cmd-frs.component.html',
  styleUrls: ['./page-cmd-frs.component.scss']
})
export class PageCmdFrsComponent implements OnInit{

  public commandeFournisseurs: CommandeFournisseur[] | undefined;

  constructor (private commandeFournisseurService: CommandeFournisseurService,
    private router: Router) { }

  ngOnInit() {
    this.getCommandeFournisseurs();
  }

  public getCommandeFournisseurs(): void {
    this.commandeFournisseurService.getCommandeFournisseurs().subscribe(
      (response: CommandeFournisseur[]) => {
        this.commandeFournisseurs = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  isOpen = false;
  activeMenuItem: CommandeFournisseur | null = null;

  toggleSubMenu(menuItem: CommandeFournisseur) {
    if (this.activeMenuItem === menuItem) {
      this.isOpen = !this.isOpen;
    }else {
      this.isOpen = true;
      this.activeMenuItem = menuItem;
    }
  }

  public onDeleteCmdFrs(cmdFrsId: number): void {
    this.commandeFournisseurService.deleteCommandeFournisseur(cmdFrsId).subscribe(
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

modifyCategory(): void {
  this.router.navigate(['modifycategory']);
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

  nouvelleCommande(): void {
    this.router.navigate(['nouvellecommandefournisseur']);
  }
}
