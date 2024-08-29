import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { RegisterStudentComponent } from './components/register-student/register-student.component';
import { LoginStudentComponent } from './components/login-student/login-student.component';
import { ListStudentComponent } from './components/list-student/list-student.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'cart', component: CartComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' },

  {path: 'add', component: AddStudentComponent},
  {path: 'edit/:id', component: EditStudentComponent},
  {path: 'list', component: ListStudentComponent},
  {path: 'login', component: LoginStudentComponent},
  {path: 'register', component: RegisterStudentComponent},
  //{path: '', component: ListStudentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
