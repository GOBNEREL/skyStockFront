import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-detail-category',
  templateUrl: './detail-category.component.html',
  styleUrls: ['./detail-category.component.scss']
})
export class DetailCategoryComponent implements OnInit {

  public categories: Category[] | undefined;

  constructor (private categoryService: CategoryService,
    private router: Router) { }

  ngOnInit() {
    this.getCategories();
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


  public onDeleteCategory(categoryId: number): void {
      this.categoryService.deleteCategory(categoryId).subscribe(
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

}
