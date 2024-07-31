import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, ElementRef, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import {
  MatTreeFlattener,
  MatTreeFlatDataSource,
} from '@angular/material/tree';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ServiceService } from 'src/app/Service/service.service';

interface CategoryNode {
  name: string;
  children?: SubcategoryNode[];
}

interface SubcategoryNode {
  name: string;
}

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-allproductlists',
  templateUrl: './allproductlists.component.html',
  styleUrls: ['./allproductlists.component.css'],
})
export class AllproductlistsComponent implements OnInit {
  treeData$ = new BehaviorSubject<CategoryNode[]>([]);
  selectedCategory: string | null = null;

  treeControl: FlatTreeControl<ExampleFlatNode>; // Declare treeControl
  treeFlattener: MatTreeFlattener<CategoryNode, ExampleFlatNode>;
  dataSource: MatTreeFlatDataSource<CategoryNode, ExampleFlatNode>;

  products: any[] = [];
  filteredProducts: any[] = [];
  pageSize: number = 5;
  currentPage: number = 0;
  url = 'https://hiradecor.beatsacademy.in/';

  constructor(
    private service: ServiceService,
    private router: Router,
    private elRef: ElementRef
  ) {
    this.treeFlattener = new MatTreeFlattener(
      this.transformer,
      (node) => node.level,
      (node) => node.expandable,
      (node) => node.children
    );
    this.treeControl = new FlatTreeControl<ExampleFlatNode>(
      (node) => node.level,
      (node) => node.expandable
    );
    this.dataSource = new MatTreeFlatDataSource(
      this.treeControl,
      this.treeFlattener
    );
  }

  ngOnInit(): void {
    this.fetchTreeData();
    this.getProductsList();
  }

  fetchTreeData() {
    this.service.getAllProductCategories().subscribe((data) => {
      const categoryNodes: CategoryNode[] = data.all_categories.map(
        (category: any) => ({
          name: category.cname,
          children: category.scname.map((subcategory: any) => ({
            name: subcategory,
          })),
        })
      );
      this.treeData$.next(categoryNodes);
      this.dataSource.data = categoryNodes; // Set the fetched data to the dataSource
    });
  }

  transformer = (node: CategoryNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  getProductsList() {
    this.service.getProductDetails().subscribe({
      next: (res: any) => {
        this.products = res.all_products;
        this.filteredProducts = [...this.products]; // Initialize filteredProducts with all products
      },
      error: (err: any) => {
        console.error('Error:', err);
        alert('Error fetching data. Check the console for details.');
      },
    });
  }

  applyPagination() {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.filteredProducts = this.products.slice(startIndex, endIndex);
    const productsSection =
      this.elRef.nativeElement.querySelector('#productsSection');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  onPageChange(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.applyPagination();
  }

  nodeClicked(node: CategoryNode | SubcategoryNode) {
    const category = this.selectedCategory;
    const subcategory = node.name;
    const category1 = node.name;
    this.selectedCategory = category;
    this.filteredProducts = this.products.filter(
      (product) => product.pcategory === category
    );
    this.filteredProducts = this.products.filter(
      (product) =>
        product.pcategory === category1 || product.psubcategory === subcategory
    );
  }

  navigateToProfile(uid: number) {
    this.router.navigate(['/productsInfo', uid]);
  }
}
