import { Component } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {
  newProduct: Product = new Product();

  constructor(private productService: ProductService, private router: Router) { }

  onSubmit() {
    this.productService.createProduct(this.newProduct).subscribe(response => {
      console.log(response);
      this.router.navigate(['/product']);
    })
  }
}
