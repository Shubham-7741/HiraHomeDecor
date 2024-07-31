import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css'],
})
export class AboutPageComponent implements OnInit {
  products: any[] = [];
  url = 'https://hiradecor.beatsacademy.in/';

  constructor(private productService: ServiceService, private router: Router) {}

  ngOnInit() {
    this.productService.getProductDetails().subscribe((res) => {
      console.log('Products Lists', res); // or do something else with the products data
      this.products = res.all_products;
    });
  }

  navigateToProfile(pid: number) {
    this.router.navigate(['/productsInfo', pid]);
  }
}
