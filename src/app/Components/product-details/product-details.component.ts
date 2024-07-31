import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { product_model } from 'src/app/model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  constructor(
    private service: ServiceService,
    private activatedRoute: ActivatedRoute
  ) {}
  product: any;
  public productId!: number;
  url = 'https://hiradecor.beatsacademy.in/';

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((val) => {
      this.productId = val['id'];
      this.service.getProductDetailsById(this.productId).subscribe({
        next: (res: any) => {
          console.log('product Detail by id', res.product_details);
          this.product = res.product_details; // Extracting the array of products
        },
        error: (err: any) => {
          console.log(err);
        },
      });
    });
  }
}
