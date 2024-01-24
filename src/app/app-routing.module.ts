import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ArtistPageComponent } from './Components/artist-page/artist-page.component';
import { ProductsComponent } from './Components/products/products.component';
import { ArtistProfileComponent } from './Components/artist-profile/artist-profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'artist', component: ArtistPageComponent },
  { path: 'profile/:artistId', component: ArtistProfileComponent },
  { path: 'products', component: ProductsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
