import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommandeClient } from 'src/app/model/commandeClient';
import { CommandeFournisseur } from 'src/app/model/commandeFournisseur';
import { CommandeClientService } from 'src/app/services/commande-client/commande-client.service';

@Component({
  selector: 'app-page-cmd-clt',
  templateUrl: './page-cmd-clt.component.html',
  styleUrls: ['./page-cmd-clt.component.scss']
})
export class PageCmdCltComponent implements OnInit{

  public commandeClients: CommandeClient[] | undefined;

  constructor (private commandeClientService: CommandeClientService,
    private router: Router) { }

  ngOnInit() {
    this.getCommandeClients();
  }

  public getCommandeClients(): void {
    this.commandeClientService.getCommandeClients().subscribe(
      (response: CommandeClient[]) => {
        this.commandeClients = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  isOpen = false;
  activeMenuItem: CommandeClient | null = null;

  toggleSubMenu(menuItem: CommandeClient) {
    if (this.activeMenuItem === menuItem) {
      this.isOpen = !this.isOpen;
    }else {
      this.isOpen = true;
      this.activeMenuItem = menuItem;
    }
  }

  public onDeleteCmdClt(cmdCltId: number): void {
    this.commandeClientService.deleteCommandeClient(cmdCltId).subscribe(
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
    this.router.navigate(['nouvellecommandeclient']);
  }

}
