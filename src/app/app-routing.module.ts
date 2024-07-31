import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AdminLoginComponent } from './Components/admin-login/admin-login.component';
import { AdminhomeComponent } from './AdminPanel/adminhome/adminhome.component';
import { AdminproductsComponent } from './AdminPanel/adminproducts/adminproducts.component';
import { EditadminproductComponent } from './AdminPanel/editadminproduct/editadminproduct.component';
import { EditProductCategoryComponent } from './AdminPanel/edit-product-category/edit-product-category.component';
import { ProductCategoryListComponent } from './AdminPanel/product-category-list/product-category-list.component';
import { AllproductlistsComponent } from './Components/allproductlists/allproductlists.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { AboutPageComponent } from './Components/about-page/about-page.component';
import { ContactPageComponent } from './Components/contact-page/contact-page.component';
import { AuthGuard } from './Gaurd/auth.guard';
import { TermscondiComponent } from './Components/termscondi/termscondi.component';
import { PrivacyPolicyComponent } from './Components/privacy-policy/privacy-policy.component';
import { PayhereComponent } from './Components/payhere/payhere.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'productsInfo/:id', component: ProductDetailsComponent },
  { path: 'payHere', component: PayhereComponent },
  { path: 'all_products', component: AllproductlistsComponent },
  { path: 'about_page', component: AboutPageComponent },
  { path: 'contact_page', component: ContactPageComponent },
  { path: 'termsand_condition_page', component: TermscondiComponent },
  { path: 'privacy_policy_page', component: PrivacyPolicyComponent },
  { path: 'adminLogin', component: AdminLoginComponent },
  {
    path: 'adminhome',
    component: AdminhomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'admin_products', component: AdminproductsComponent },
      { path: 'addAdminproducts', component: EditadminproductComponent },
      { path: 'editAdminproducts/:id', component: EditadminproductComponent },
      { path: 'product_categories', component: ProductCategoryListComponent },
      {
        path: 'product_category_create',
        component: EditProductCategoryComponent,
      },
      {
        path: 'editAdminProductCategory/:id',
        component: EditProductCategoryComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
