import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  // providers:[AlertifyService]
})
export class ProductComponent implements OnInit {
  title = "Product List";
  filterText = ""
  products : Product[] = [
    {
      id:1,
      name:"Laptop",
      price: 780,
      categoryId:1,
      description:"HP",
      imageUrl:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1600&q=60"
    },
    { 
      id:2,
      name:"Phone",
      price:3500,
      categoryId:2,
      description:"IPhone",
      imageUrl:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGhvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=1600&q=60"
    },
    {
      id:1,
      name:"Mouse",
      price: 50,
      categoryId:3,
      description:"Logitech",
      imageUrl:"https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bW91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=1600&q=60"
    },
    { 
      id:2,
      name:"Keyboard",
      price:75,
      categoryId:3,
      description:"Logitech",
      imageUrl:"https://images.unsplash.com/photo-1541140532154-b024d705b90a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
    },
  { 
    id:2,
    name:"Phone",
    price:3250,
    categoryId:2,
    description:"Huawei",
    imageUrl:"https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGhvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=1600&q=60"
  }];
  constructor(private alertService: AlertifyService){  
      
  }
  addToCart(product){
    this.alertService.success(product.name+" added to cart!");
  }  
  ngOnInit() {

  }

}
