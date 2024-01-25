import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';


@Component({
  selector: 'app-artist-profile',
  templateUrl: './artist-profile.component.html',
  styleUrls: ['./artist-profile.component.css']
})
export class ArtistProfileComponent implements OnInit {
  // route: any;
  // artistService: any;
  artists: any[] = [];

  constructor(private route: ActivatedRoute, private service: ServiceService) {}
  
  ngOnInit(): void {

    this.getArtistProfile();
  }

  getArtistProfile(){
    // this.service.getArtistById(Aid: any)
  }
}
 