import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/category/category';
import { AlertifyService } from 'src/app/services/alertify.service';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../product';

@Component({
  selector: 'app-add-product2',
  templateUrl: './add-product2.component.html',
  styleUrls: ['./add-product2.component.css'],
  providers: [CategoryService]
})
export class AddProduct2Component implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private productService: ProductService,
    private alertifyService: AlertifyService
  ){

  }
  productAddForm : FormGroup ;
  product: Product = new Product();
  categories:Category[];
  createproductAddForm(){
    this.productAddForm = this.formBuilder.group({
      name:["", Validators.required],
      price:["", Validators.required],
      categoryId:["", Validators.required],
      description:["", Validators.required],
      imageUrl:["", Validators.required]
    });
  }
  ngOnInit() {
    this.createproductAddForm();
    this.categoryService.getCategories().subscribe(data =>{
      this.categories = data
    })
  }
  add(){
    if(this.productAddForm.valid) {
      this.product = Object.assign({},this.productAddForm.value);
    }
    this.productService.addProduct(this.product)
    .subscribe(data =>{
      this.alertifyService.success(data.name + " added successfully")
    });
  }
}