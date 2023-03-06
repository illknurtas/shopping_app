import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  title = "Product List";
  products : any[] = [
    {
      id:1,
      name:"Laptop",
      price: 780,
      categoryId:1,
      description:"HP"
    },
    { 
      id:2,
      name:"Phone",
      price:3500,
      categoryId:2,
      description:"IPhone"
    }
  ];
  constructor(){  
      
  }
  ngOnInit() {

  }

}
