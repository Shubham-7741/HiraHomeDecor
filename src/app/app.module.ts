import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderBottomComponent } from './Components/header-bottom/header-bottom.component';
import { FooterComponent } from './Components/footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { HomeComponent } from './Components/home/home.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { MatTreeModule } from '@angular/material/tree';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { AdminLoginComponent } from './Components/admin-login/admin-login.component';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { AdminhomeComponent } from './AdminPanel/adminhome/adminhome.component';
import { SidebarComponent } from './AdminPanel/sidebar/sidebar.component';
import { AdminproductsComponent } from './AdminPanel/adminproducts/adminproducts.component';
import { EditadminproductComponent } from './AdminPanel/editadminproduct/editadminproduct.component';
import { DialogContentExampleDialog, EditProductCategoryComponent } from './AdminPanel/edit-product-category/edit-product-category.component';
import { ProductCategoryListComponent } from './AdminPanel/product-category-list/product-category-list.component';
import { AllproductlistsComponent } from './Components/allproductlists/allproductlists.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { AboutPageComponent } from './Components/about-page/about-page.component';
import { ContactPageComponent } from './Components/contact-page/contact-page.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { TermscondiComponent } from './Components/termscondi/termscondi.component';
import { PrivacyPolicyComponent } from './Components/privacy-policy/privacy-policy.component';
import { PayhereComponent } from './Components/payhere/payhere.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderBottomComponent,
    FooterComponent,
    HomeComponent,
    AdminLoginComponent,
    AdminhomeComponent,
    SidebarComponent,
    AdminproductsComponent,
    EditadminproductComponent,
    EditProductCategoryComponent,
    ProductCategoryListComponent,
    AllproductlistsComponent,
    ProductDetailsComponent,
    AboutPageComponent,
    ContactPageComponent,
    DialogContentExampleDialog,
    TermscondiComponent,
    PrivacyPolicyComponent,
    PayhereComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatMenuModule,
    NgbCarouselModule,
    NgbDropdownModule,
    NgbCollapseModule,
    MatTreeModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    MatTreeModule,
    ToastrModule.forRoot()



  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
