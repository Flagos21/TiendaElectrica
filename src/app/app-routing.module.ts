import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { HomeComponent } from './Components/home/home.component';
import { LoginRegisterComponent } from './Components/login-register/login-register.component';
import { SalesComponent } from './Components/sales/sales.component';
import { InventoryComponent } from './Components/inventory/inventory.component';

const routes: Routes = [

  {path: '', pathMatch: 'full', redirectTo: '/home'},

  {
    path: 'home',
    component: HomeComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login-register']))
  },
  
  {path: 'login-register', component: LoginRegisterComponent},
  {path: 'sales', component: SalesComponent},
  {path: 'inventory', component: InventoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
