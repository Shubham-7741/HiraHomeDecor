import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hira Home Decor';
  isLoggedIn() {
    return !localStorage.getItem('admin');
  }


  onActive() {
    window.scroll(0, 0);
  }
}
