import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/Service/shared.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private router: Router, private sharedService: SharedService) { }

  logout() {
    if (localStorage.getItem('admin')) {
      localStorage.removeItem('admin');
    }
    console.log('Logout clicked');
    localStorage.removeItem('admin');
    this.sharedService.setAdminLoggedIn(false);
    this.router.navigate(['']);
  }
}
