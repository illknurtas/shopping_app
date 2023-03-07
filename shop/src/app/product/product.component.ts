import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from '../services/alertify.service';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductService]
})
export class ProductComponent implements OnInit {
  title = "Product List";
  filterText = "";
  products : Product[];

  constructor(private alertService: AlertifyService,
    private productService: ProductService){  
      
  }

  addToCart(product){
    this.alertService.success(product.name+" added to cart!");
  }  

  // when components run the first time
  ngOnInit() {
    this.productService.getProducts()
    .subscribe(data => this.products = data);
  }
}
