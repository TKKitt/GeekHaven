import { Component } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent {
  id: string = '';
  newProduct: Product = new Product();

  constructor(
    private productService: ProductService,
    private actRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const routeId = this.actRoute.snapshot.paramMap.get('id') ?? '';
    this.id = routeId;
    this.productService.getProductById(this.id).subscribe((response) => {
      console.log(response);
      this.newProduct = response;
    });
  }

  onSubmit() {
    this.productService
      .editProduct(this.newProduct.id, this.newProduct)
      .subscribe((response) => {
        console.log(response);
        this.router.navigateByUrl('/product');
      });
  }
}
