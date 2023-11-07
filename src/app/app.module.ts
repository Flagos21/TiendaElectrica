import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp({"projectId":"tiendaelectronica-86ae2","appId":"1:1094009642676:web:b2d39bc443de6a5d9ec1e1","storageBucket":"tiendaelectronica-86ae2.appspot.com","apiKey":"AIzaSyB44aFZc1vrjUf3GnIE0HratUybw9WNYTU","authDomain":"tiendaelectronica-86ae2.firebaseapp.com","messagingSenderId":"1094009642676","measurementId":"G-CW0FH0JTE4"})),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
