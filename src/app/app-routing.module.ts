import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AuthComponent} from './_layouts/auth/auth.component';
import {AdminComponent} from './_layouts/admin/admin.component';
import {OrdersComponent} from './orders/orders.component';
import {FilterComponent} from './filter/filter.component';
import { UserRegisterComponent } from './user-register/user-register.component';

const routes: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login', component: AuthComponent,
    children: [
      {path: '', component: LoginComponent}
    ]
  },
  {
    path: '', component: AdminComponent,
    children: [
      {path: 'orders', component: OrdersComponent},
      {path: 'filter', component: FilterComponent},
      {path: 'userlist', component: UserRegisterComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
