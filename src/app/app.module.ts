import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ArticleService } from './services/article/article.service';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { MenuComponent } from './composants/menu/menu.component';
import { PageArticleComponent } from './pages/article/page-article/page-article.component';
import { DetailArticleComponent } from './composants/detail-article/detail-article.component';
import { BouttonActionComponent } from './composants/boutton-action/boutton-action.component';
import { NouvelArticleComponent } from './pages/article/nouvel-article/nouvel-article.component';
import { FormsModule } from '@angular/forms';
import { BoutonTroiComponent } from './composants/bouton-troi/bouton-troi.component';
import { ModifyArticleComponent } from './pages/article/modify-article/modify-article.component';
import { PageCategoryComponent } from './pages/category/page-category/page-category.component';
import { NouvelCategoryComponent } from './pages/category/nouvel-category/nouvel-category.component';
import { ModifyCategoryComponent } from './pages/category/modify-category/modify-category.component';
import { DetailCategoryComponent } from './composants/detail-category/detail-category.component';
import { PageSupplierComponent } from './pages/supplier/page-supplier/page-supplier.component';
import { NewSupplierComponent } from './pages/supplier/new-supplier/new-supplier.component';
import { DetailSupplierComponent } from './composants/detail-supplier/detail-supplier.component';
import { ModifySupplierComponent } from './pages/supplier/modify-supplier/modify-supplier.component';
import { PageCustomerComponent } from './pages/customer/page-customer/page-customer.component';
import { NewCustomerComponent } from './pages/customer/new-customer/new-customer.component';
import { ModifyCustomerComponent } from './pages/customer/modify-customer/modify-customer.component';
import { DetailCustomerComponent } from './composants/detail-customer/detail-customer.component';
import { PageCmdFrsComponent } from './pages/supplier/page-cmd-frs/page-cmd-frs.component';
import { NouvelleCmdFrsComponent } from './pages/supplier/nouvelle-cmd-frs/nouvelle-cmd-frs.component';
import { DetailCmdFrsComponent } from './composants/detail-cmd-frs/detail-cmd-frs.component';
import { PageCmdCltComponent } from './pages/customer/page-cmd-clt/page-cmd-clt.component';
import { NouvelleCmdCltComponent } from './pages/customer/nouvelle-cmd-clt/nouvelle-cmd-clt.component';
import { DetailCmdCltComponent } from './composants/detail-cmd-clt/detail-cmd-clt.component';

@NgModule({
  declarations: [
    AppComponent,
    PageDashboardComponent,
    MenuComponent,
    PageArticleComponent,
    DetailArticleComponent,
    BouttonActionComponent,
    NouvelArticleComponent,
    BoutonTroiComponent,
    ModifyArticleComponent,
    PageCategoryComponent,
    NouvelCategoryComponent,
    ModifyCategoryComponent,
    DetailCategoryComponent,
    PageSupplierComponent,
    NewSupplierComponent,
    DetailSupplierComponent,
    ModifySupplierComponent,
    PageCustomerComponent,
    NewCustomerComponent,
    ModifyCustomerComponent,
    DetailCustomerComponent,
    PageCmdFrsComponent,
    NouvelleCmdFrsComponent,
    DetailCmdFrsComponent,
    PageCmdCltComponent,
    NouvelleCmdCltComponent,
    DetailCmdCltComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  // providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
