import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ArtistPageComponent } from './Components/artist-page/artist-page.component';
import { ProductsComponent } from './Components/products/products.component';
import { ArtistProfileComponent } from './Components/artist-profile/artist-profile.component';
import { OrganizerPageComponent } from './Components/organizer-page/organizer-page.component';
import { OrganizerProfileComponent } from './Components/organizer-profile/organizer-profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'artist', component: ArtistPageComponent },
  { path: 'profile/:artistId', component: ArtistProfileComponent },
  { path: 'organizers', component: OrganizerPageComponent },
  { path: 'Orgprofile/:organizerId', component: OrganizerProfileComponent },
  { path: 'products', component: ProductsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
