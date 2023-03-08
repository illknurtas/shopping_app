import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { ProductComponent } from './product/product.component';

const routes: Routes = [

  {
    path:'products', component: ProductComponent
  },
  {
    path:"products/category/:categoryId", component: ProductComponent
  },
  {
    path:'/add-product-1', component: ProductComponent
  },
  {
    path:'/add-product-2', component: ProductComponent
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
