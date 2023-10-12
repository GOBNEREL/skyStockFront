import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LigneCmdFrs } from 'src/app/model/ligneCmdFrs';
import { LigneCmdFrsService } from 'src/app/services/ligne-cmd-frs/ligne-cmd-frs.service';

@Component({
  selector: 'app-detail-cmd-frs',
  templateUrl: './detail-cmd-frs.component.html',
  styleUrls: ['./detail-cmd-frs.component.scss']
})
export class DetailCmdFrsComponent implements OnInit {
  public ligneCmdFrs: LigneCmdFrs[] | undefined;

  public totalPrice: number | undefined;

  constructor (private ligneCmdFrsService: LigneCmdFrsService,
    private router: Router) { }

  ngOnInit() {
    this.getLigneCmdFrs();
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

  public onDeleteLigneCmdFrs(ligneCmdFrsId: number): void {
    this.ligneCmdFrsService.deleteLigneCmdFrs(ligneCmdFrsId).subscribe(
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
