import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { RegisterComponent } from './Components/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginRegisterComponent } from './Components/login-register/login-register.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { SalesComponent } from './Components/sales/sales.component';
import { InventoryComponent } from './Components/inventory/inventory.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    LoginRegisterComponent,
    NavbarComponent,
    SalesComponent,
    InventoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp({"projectId":"tiendaelectronica-86ae2","appId":"1:1094009642676:web:7e1ab1925a7b3f209ec1e1","storageBucket":"tiendaelectronica-86ae2.appspot.com","apiKey":"AIzaSyB44aFZc1vrjUf3GnIE0HratUybw9WNYTU","authDomain":"tiendaelectronica-86ae2.firebaseapp.com","messagingSenderId":"1094009642676","measurementId":"G-7S8SVQ2L61"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
