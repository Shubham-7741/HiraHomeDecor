import { ChangeDetectorRef, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from 'src/app/Service/service.service';
import { product_category_model } from 'src/app/model';

@Component({
  selector: 'app-edit-product-category',
  templateUrl: './edit-product-category.component.html',
  styleUrls: ['./edit-product-category.component.css']
})
export class EditProductCategoryComponent implements OnInit {


  productCategoryForm!: FormGroup;
  categoryID!: number;
  product_category_model: product_category_model = new product_category_model();

  showsubmit!: boolean;
  showupdate!: boolean;
  showdelete!: boolean;

  categoryDetails: any = {};
  editingIndex: number = -1;

  displayedColumns: string[] = ['subcategory', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private fb: FormBuilder, private service: ServiceService, private route: ActivatedRoute, private router: Router, private cdr: ChangeDetectorRef, private toastr: ToastrService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.productCategoryForm = this.fb.group({
      categoryname: [''],
      subcategories: ['']

    })


    // Initialize dataSource with an empty array
    this.dataSource = new MatTableDataSource<any>([]);

    // this.route.params.subscribe(val => {
    //   this.categoryID = val['id']; // Assuming the parameter name is 'id'
    //   // Fetch the product details using the ID and populate the form
    //   this.service.getProductCategoriesById(this.categoryID).subscribe({
    //     next: (res) => {
    //       this.onEdit(res.category_details);
    //       this.categoryDetails = res.category_details;
    //       this.dataSource = new MatTableDataSource(this.categoryDetails.scname.map((scname: string) => ({ scname })));
    //       this.dataSource.paginator = this.paginator;
    //       this.dataSource.sort = this.sort;
    //       console.log('Category Details:', res.category_details);
    //     }, error: (err) => {
    //       console.log(err)
    //     }
    //   });

    // })
    this.route.params.subscribe(val => {
      this.categoryID = val['id']; // Assuming the parameter name is 'id'
      // Fetch the product details using the ID and populate the form
      this.service.getProductCategoriesById(this.categoryID).subscribe({
        next: (res) => {
          this.onEdit(res.category_details);
          this.categoryDetails = res.category_details;
          if (Array.isArray(this.categoryDetails.scname)) {
            this.dataSource = new MatTableDataSource(this.categoryDetails.scname.map((scname: string) => ({ scname })));
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          } else {
            console.error('scname is not an array');
            // Handle the situation where scname is not an array
            // For example, set dataSource to an empty array or handle it in another appropriate way
            // this.dataSource = new MatTableDataSource([]);
          }
          console.log('Category Details:', res.category_details);
        }, error: (err) => {
          console.log(err);
        }
      });
    });



    // this.productCategoryForm.reset()
    this.showsubmit = true;
    this.showupdate = false;
    this.showdelete = false;
  }



  onEdit(category: product_category_model) {
    this.showsubmit = false;
    this.showupdate = true;
    this.showdelete = true;
    this.productCategoryForm.setValue({
      categoryname: category.cname,
      subcategories: category.scname,


    })
    this.productCategoryForm.get('subcategories')?.setValue('');

  }

  // update category

  updateCategory() {
    // Populate the product_category_model with form values
    this.product_category_model.cname = this.productCategoryForm.value.categoryname;

    // Convert the array of subcategories into a comma-separated string
    this.product_category_model.scname = this.categoryDetails.scname.join(', ');

    // Call the service to update the category details
    this.service.updateProductCategories(this.categoryID, this.product_category_model).subscribe({
      next: (res) => {
        console.log(res);
        // alert('Update Category Successful');
        this.toastr.success('Update Category Successful!', 'Success');
        this.router.navigate(['/adminhome/product_categories']);
      },
      error: (err) => {
        console.error('Error updating category:', err);
        // Optionally, display an error message to the user
        // You can also handle specific error cases if needed
      }
    });
  }

  // post data function

  submitCategory() {
    // Check if category name field is empty
    if (!this.productCategoryForm.value.categoryname) {
      this.toastr.error('Please enter category name', 'Error');
      return; // Stop further execution
    }

    // Populate the product_category_model with form values
    this.product_category_model.cname = this.productCategoryForm.value.categoryname;

    // Convert the array of subcategories into a comma-separated string
    this.product_category_model.scname = this.categoryDetails.scname.join(', ');

    // Call the service to post the category details
    this.service.postProductCategories(this.product_category_model).subscribe({
      next: (res) => {
        console.log(res);
        // alert('Add Category Successful');
        this.toastr.success('Add Category Successful!', 'Success');
        this.router.navigate(['adminhome/product_categories']);
      },
      error: (err) => {
        console.error('Error adding category:', err);
        // Optionally, display an error message to the user
        // You can also handle specific error cases if needed
        this.toastr.error('Error adding category', 'Error');
      }
    });
  }



  // delete Category
  deletecategory() {
    this.service.deleteArtistCategoriesById(this.categoryID).subscribe(res => {
      console.log(res);
      // alert('Delete Category Successfull');
      this.toastr.success('Delete Category Successful!', 'Success');
      this.productCategoryForm.reset();
      this.router.navigate(['adminhome/product_categories'])
    })
  }
  openConfirmationDialog(): void {
    const dialogRef = this.dialog.open(DialogContentExampleDialog, {
      width: '300px',
      data: { message: 'Are you sure you want to delete this category?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // User confirmed the deletion, call your deleteCategory method here
        this.deletecategory();
      }
    });
  }


  // edit sub category row
  editSubcategory(row: any) {
    this.editingIndex = this.dataSource.data.indexOf(row);
  }
  // save edited
  saveSubcategory() {
    // this.editingIndex = -1; // Reset editing index after saving
    if (this.editingIndex !== -1) {
      // Get the edited subcategory from the data source
      const editedSubcategory = this.dataSource.data[this.editingIndex].scname;

      // Update the corresponding subcategory in the categoryDetails.scname array
      this.categoryDetails.scname[this.editingIndex] = editedSubcategory;

      // Reset the editing index
      this.editingIndex = -1;

      // Optionally, you can call updateCategory here if you want to persist edits immediately
    }
  }

  // delete sub category
  deleteSubcategory(index: number) {



    if (index >= 0 && index < this.dataSource.data.length) {
      const deletedSubcategory = this.dataSource.data[index].scname;

      // Remove the subcategory from the data source array
      this.dataSource.data.splice(index, 1);

      // Update the categoryDetails.scname array with the changes
      this.categoryDetails.scname = this.dataSource.data.map((item: any) => item.scname);

      // Optionally, update the category details if needed
      this.updateCategory();
      this.toastr.error('Delete Sub-Category Successful!', 'Success');

      console.log('Deleted subcategory:', deletedSubcategory);
      console.log('Remaining data:', this.dataSource.data);
    } else {
      console.error('Invalid index for deleting subcategory');
    }

    // Manually trigger change detection
    this.cdr.detectChanges();
  }

  // add new sub category
  addNewSubcategory() {
    const newSubcategory = this.productCategoryForm.value.subcategories.trim();
    if (newSubcategory) {
      // Check if this.categoryDetails.scname is undefined or not an array
      if (!Array.isArray(this.categoryDetails.scname)) {
        // If it's not an array or undefined, initialize it as an empty array
        this.categoryDetails.scname = [];
      }
      // Now it's safe to push the new subcategory
      this.categoryDetails.scname.push(newSubcategory);
      this.dataSource.data = [...this.categoryDetails.scname.map((scname: string) => ({ scname }))];
      this.productCategoryForm.patchValue({ subcategories: '' });
      this.toastr.success('Add Sub-Category Successful!', 'Success');
    } else {
      console.error('New subcategory cannot be empty');
    }
  }

}

@Component({
  selector: 'dialog-content-example-dialog',
  template: `
    <h2 mat-dialog-title>Confirm</h2>
    <mat-dialog-content>{{ data.message }}</mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Cancel</button>
      <button mat-button color="warn" [mat-dialog-close]="true">Confirm</button>
    </mat-dialog-actions>
  `,
})
export class DialogContentExampleDialog {
  constructor(public dialogRef: MatDialogRef<DialogContentExampleDialog>, @Inject(MAT_DIALOG_DATA) public data: any) { }
}
