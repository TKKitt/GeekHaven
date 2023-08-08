import { Component } from '@angular/core';

import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  productList: Product[] = [];
  
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((response) => {
      this.productList = response;
    });
  }

  deleteProduct(id: string) {
    this.productService.deleteProduct(id).subscribe(response => {
      console.log(response);
    });
    this.router.navigate(['']);
  }
}
