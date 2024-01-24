import { Component } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products: any[] = [];

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.getProductsList();
  }

  getProductsList() {
    this.service.getProductDetails().subscribe({
      next: (res: any) => {
        this.products = res;
      },
      error: (err: any) => {
        alert(err);
      }
    });
  }

}
