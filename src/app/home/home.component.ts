import { Component } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  featuredList: Product [] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getFeaturedProducts();
  }

  getFeaturedProducts(): void {
    this.productService.getProductById('1').subscribe((response) => {
      this.featuredList.push(response);
      console.log(response);
    })
    this.productService.getProductById('2').subscribe((response) => {
      this.featuredList.push(response);
      console.log(response);
    })
    this.productService.getProductById('3').subscribe((response) => {
      this.featuredList.push(response);
      console.log(response);
    })
  }
}
