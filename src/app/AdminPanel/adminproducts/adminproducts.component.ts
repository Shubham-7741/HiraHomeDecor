import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';


@Component({
  selector: 'app-adminproducts',
  templateUrl: './adminproducts.component.html',
  styleUrls: ['./adminproducts.component.css']
})
export class AdminproductsComponent {

  // public statusList: string[] = ['Active', 'Trial', 'Expired'];
  public dataLoaded: boolean = false;


  displayedColumns: string[] = ['id', 'productname', 'brand', 'category', 'subcategory', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  products: any;

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList() {
    this.service.getProductDetails().subscribe({
      next: (res: any) => {
        this.dataLoaded = true;
        console.log('Products : ', res.all_products);
        this.products = res.all_products;
        this.dataSource = new MatTableDataSource(this.products);
        // this.dataSource.sort = this.sort;
        // this.dataSource.paginator = this.paginator;
      },
      error: (err: any) => {
        alert(err);
      }
    });
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    // if (this.dataSource.paginator) {
    //   this.dataSource.paginator.firstPage();
    // }
  }
  onChange(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  edit(id: number) {
    this.router.navigate(['/adminhome/editAdminproducts', id]);
  }

  showUsers(businessId: string) {
    // this.service.setSelectedBusinessId(businessId);
    // this.router.navigate(['/home/multiusers', businessId]);
  }

}
