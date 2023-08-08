import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  id: string = '';
  currentProduct: Product = new Product();

  constructor(
    private actRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const routeId = this.actRoute.snapshot.paramMap.get('id') ?? '';
    this.id = routeId;
    this.productService.getProductById(this.id).subscribe((response) => {
      this.currentProduct = response;
      console.log(this.currentProduct);
    });
  }

  deleteProduct(id: string) {
    this.productService.deleteProduct(id).subscribe(response => {
      console.log(response);
    });
    this.router.navigate(['']);
  }
}
