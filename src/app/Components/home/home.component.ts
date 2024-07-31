import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: any[] = [];
  url = 'https://hiradecor.beatsacademy.in/';

  constructor(private productService: ServiceService, private router: Router) {}

  ngOnInit() {
    this.productService.getProductDetails().subscribe((res) => {
      console.log('Products Lists', res.all_products); // or do something else with the products data
      this.products = res.all_products;
    });
  }

  navigateToProfile(pid: number) {
    this.router.navigate(['/productsInfo', pid]);
  }
}
