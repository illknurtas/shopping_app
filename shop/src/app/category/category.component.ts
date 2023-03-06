import { Component } from '@angular/core';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  title="Category List"; 
  categories: Category[] = [
    {
      id:1,
      name:"Electronics"
    },
    {
      id:2,
      name:"Phone"
    },
    {
      id:3,
      name:"Computer"
    },
    {
      id:4,
      name:"Accessories"
    },
    {
      id:5,
      name:"Games"
    }

  ];
}
