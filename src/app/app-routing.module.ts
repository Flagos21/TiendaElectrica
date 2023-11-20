import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginRegisterComponent } from './Components/login-register/login-register.component';

const routes: Routes = [

  {path: '', pathMatch: 'full', redirectTo: '/home'},

  {
    path: 'home',
    component: HomeComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/register']))
  },

  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'login-register', component: LoginRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
