import { Component, OnInit } from '@angular/core';
import { Category } from './category';
import { CategoryService } from '../services/category.service';
import { AlertifyService } from '../services/alertify.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CategoryService]
})
export class CategoryComponent implements OnInit {
  title="Category List"; 
  categories: Category[];
  constructor(
    private alertService: AlertifyService,
    private categoryService: CategoryService
  ){
    
  }
  ngOnInit() {
    this.categoryService.getCategories()
    .subscribe(data => this.categories = data);
  }
}