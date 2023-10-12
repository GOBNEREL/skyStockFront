import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LigneCmdClt } from 'src/app/model/ligneCmdClt';
import { LigneCmdFrs } from 'src/app/model/ligneCmdFrs';
import { LigneCmdCltService } from 'src/app/services/ligne-cmd-clt/ligne-cmd-clt.service';

@Component({
  selector: 'app-detail-cmd-clt',
  templateUrl: './detail-cmd-clt.component.html',
  styleUrls: ['./detail-cmd-clt.component.scss']
})
export class DetailCmdCltComponent implements OnInit {
  public ligneCmdClts: LigneCmdClt[] | undefined;

  public totalPrice: number | undefined;

  constructor (private ligneCmdCltService: LigneCmdCltService,
    private router: Router) { }

  ngOnInit() {
    this.getLigneCmdClt();
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

  public onDeleteLigneCmdClt(ligneCmdCltId: number): void {
    this.ligneCmdCltService.deleteLigneCmdClt(ligneCmdCltId).subscribe(
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
