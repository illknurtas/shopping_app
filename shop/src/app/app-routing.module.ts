import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { LoginComponent } from './login/login.component';
import { AddProduct1Component } from './product/add-product1/add-product1.component';
import { AddProduct2Component } from './product/add-product2/add-product2.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [

  {
    path:'products', component: ProductComponent
  },
  {
    path:"products/category/:categoryId", component: ProductComponent
  },
  {
    path:'add-product-1', component: AddProduct1Component
  },
  {
    path:'add-product-2', component: AddProduct2Component
  },
  {
    path:'login', component: LoginComponent
  },
  {
    path:"", redirectTo: "products", pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
