import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageArticleComponent } from './pages/article/page-article/page-article.component';
import { NouvelArticleComponent } from './pages/article/nouvel-article/nouvel-article.component';
import { ModifyArticleComponent } from './pages/article/modify-article/modify-article.component';
import { ModifyCategoryComponent } from './pages/category/modify-category/modify-category.component';
import { NouvelCategoryComponent } from './pages/category/nouvel-category/nouvel-category.component';
import { PageSupplierComponent } from './pages/supplier/page-supplier/page-supplier.component';
import { NewSupplierComponent } from './pages/supplier/new-supplier/new-supplier.component';
import { ModifySupplierComponent } from './pages/supplier/modify-supplier/modify-supplier.component';
import { PageCustomerComponent } from './pages/customer/page-customer/page-customer.component';
import { NewCustomerComponent } from './pages/customer/new-customer/new-customer.component';
import { ModifyCustomerComponent } from './pages/customer/modify-customer/modify-customer.component';
import { PageCmdFrsComponent } from './pages/supplier/page-cmd-frs/page-cmd-frs.component';
import { NouvelleCmdFrsComponent } from './pages/supplier/nouvelle-cmd-frs/nouvelle-cmd-frs.component';
import { PageCategoryComponent } from './pages/category/page-category/page-category.component';
import { PageCmdCltComponent } from './pages/customer/page-cmd-clt/page-cmd-clt.component';
import { NouvelleCmdCltComponent } from './pages/customer/nouvelle-cmd-clt/nouvelle-cmd-clt.component';

const routes: Routes = [
  { 
    path: '',
    component: PageDashboardComponent,
    children: [
      {
        path: 'articles',
        component: PageArticleComponent
      },

      {
        path: 'nouvelarticle',
        component: NouvelArticleComponent
      },

      {
        path: 'modifyarticle',
        component: ModifyArticleComponent
      },

      {
        path: 'categorie',
        component: PageCategoryComponent
      },

      {
        path: 'nouvelecategorie',
        component: NouvelCategoryComponent
      },
      
      {
        path: 'modifycategory',
        component: ModifyCategoryComponent
      },

      {
        path: 'supplier',
        component: PageSupplierComponent
      },

      {
        path: 'newsupplier',
        component: NewSupplierComponent
      },

      {
        path: 'modifysupplier',
        component: ModifySupplierComponent
      },

      {
        path: 'commandesfournisseur',
        component: PageCmdFrsComponent
      },
      
      {
        path: 'nouvellecommandefournisseur',
        component: NouvelleCmdFrsComponent
      },
      
      {
        path: 'customer',
        component: PageCustomerComponent
      },
      
      {
        path: 'newcustomer',
        component: NewCustomerComponent
      },
      
      {
        path: 'modifycustomer',
        component: ModifyCustomerComponent
      },

      {
        path: 'commandesclient',
        component: PageCmdCltComponent
      },
      
      {
        path: 'nouvellecommandeclient',
        component: NouvelleCmdCltComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
