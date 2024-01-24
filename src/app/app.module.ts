  import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  import { AppRoutingModule } from './app-routing.module';
  import { AppComponent } from './app.component';
  import { HeaderTopComponent } from './Components/header-top/header-top.component';
  import { HeaderBottomComponent } from './Components/header-bottom/header-bottom.component';
  import { FooterComponent } from './Components/footer/footer.component';
  import { MatToolbarModule } from '@angular/material/toolbar';
  import { MatButtonModule } from '@angular/material/button';
  import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
  import { MatIconModule } from '@angular/material/icon';
  import { MatInputModule } from '@angular/material/input';
  import { MatFormFieldModule } from '@angular/material/form-field';
  import { MatMenuModule } from '@angular/material/menu';
  import { HomeComponent } from './Components/home/home.component';
  import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
  import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
  import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
  import { ArtistPageComponent } from './Components/artist-page/artist-page.component';
  import {MatTreeModule} from '@angular/material/tree';
  import {MatPaginatorModule} from '@angular/material/paginator';
  import { HttpClientModule } from '@angular/common/http';
  import { ProductsComponent } from './Components/products/products.component';
  import { ArtistProfileComponent } from './Components/artist-profile/artist-profile.component';


  @NgModule({
    declarations: [
      AppComponent,
      HeaderTopComponent,
      HeaderBottomComponent,
      FooterComponent,
      HomeComponent,
      ArtistPageComponent,
      ProductsComponent,
      ArtistProfileComponent
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      MatToolbarModule,
      MatButtonModule,
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
      HttpClientModule
      
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
