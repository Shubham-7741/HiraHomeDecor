import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from 'src/app/Service/service.service';
import { product_model } from 'src/app/model';

@Component({
  selector: 'app-editadminproduct',
  templateUrl: './editadminproduct.component.html',
  styleUrls: ['./editadminproduct.component.css'],
})
export class EditadminproductComponent {
  url = 'https://hiradecor.beatsacademy.in/';
  productForm!: FormGroup;
  product_model: product_model = new product_model();
  productId!: number; // Variable to store the ID of the product to be edited

  showsubmit!: boolean;
  showupdate!: boolean;
  showdelete!: boolean;
  productimageData: File | null = null;
  imagePreview: string | ArrayBuffer | null = null;

  constructor(
    private service: ServiceService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      id: [''],
      productsname: [''],
      pdescription: [''],
      category: [''],
      subcategory: [''],
      productImage: [''],
    });

    // Get the ID of the product from the route parameters
    this.route.params.subscribe((val) => {
      this.productId = val['id']; // Assuming the parameter name is 'id'
      // Fetch the product details using the ID and populate the form
      this.service.getProductDetailsById(this.productId).subscribe({
        next: (res) => {
          this.onedit(res.product_details);
          console.log('Product Details:', res.product_details);
        },
        error: (err) => {
          console.log(err);
        },
      });
    });

    this.productForm.reset();
  }

  onedit(product: any) {
    this.showsubmit = false;
    this.showupdate = true;
    this.showdelete = true;

    this.productForm.setValue({
      id: product.pid,
      productsname: product.pname,
      pdescription: product.pdescription,
      category: product.pcategory,
      subcategory: product.psubcategory,
      productImage: product.pimages,
    });

    if (product.pimages) {
      this.imagePreview = null; // Reset the preview if the existing image is being used
    }
  }

  postproducts(): void {
    const productData = {
      pdescription: this.productForm.value.pdescription,
      pname: this.productForm.value.productsname,
      pcategory: this.productForm.value.category,
      psubcategory: this.productForm.value.subcategory,
      pimages: this.productimageData,
    };

    const isEmptyField = Object.values(productData).some((value) => !value);

    if (isEmptyField) {
      this.toastr.error('Please fill all fields', 'Error');
      return; // Stop further execution
    }

    const formData: FormData = new FormData();
    for (const [key, value] of Object.entries(productData)) {
      formData.append(key, value);
    }

    this.service.ProductsPost(formData).subscribe((res) => {
      if (res.status === 'success') {
        this.toastr.success('Successfully added', 'Success');
      } else {
        this.toastr.error('Something went wrong', 'Error');
      }

      this.productForm.reset();
      this.router.navigate(['adminhome/admin_products']);
    });
  }

  deleteProduct(): void {
    this.service.deleteProductById(this.productId).subscribe(
      () => {
        this.toastr.success('Product deleted successfully!', 'Success');
        this.router.navigate(['adminhome/admin_products']);
      },
      (error) => {
        console.error('Error deleting product:', error);
      }
    );
  }

  updateProduct(): void {
    const productData = {
      pname: this.productForm.value.productsname,
      pcategory: this.productForm.value.category,
      psubcategory: this.productForm.value.subcategory,
      pdescription: this.productForm.value.pdescription,
      ...(this.productimageData ? { pimages: this.productimageData } : {}),
    };

    const formData: FormData = new FormData();
    for (const [key, value] of Object.entries(productData)) {
      formData.append(key, value as string | Blob);
    }

    this.service
      .updateProductById(this.productId, formData)
      .subscribe((res) => {
        this.toastr.success('Product Updated successfully!', 'Success');
        this.productForm.reset();
        this.router.navigate(['adminhome/admin_products']);
      });
  }
  // for product image
  onImageSelected(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      this.productimageData = fileInput.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(this.productimageData);
    } else {
      this.productimageData = null;
      this.imagePreview = null; // Reset the preview if no file is selected
    }
  }
}
