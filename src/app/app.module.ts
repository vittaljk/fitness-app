import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { Store } from 'store';

// feature modules

// containers
import { AppComponent } from './containers/app/app.component';

// components

// routes
export const ROUTES: Routes = [];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    Store
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}


// <script src="https://www.gstatic.com/firebasejs/4.13.0/firebase.js"></script>
// <script>
//   // Initialize Firebase
//   var config = {
//     apiKey: "AIzaSyA9lotH2Rt-L7yCYaBUH0gM8JJ2CPZeN_M",
//     authDomain: "fitness-app-98585.firebaseapp.com",
//     databaseURL: "https://fitness-app-98585.firebaseio.com",
//     projectId: "fitness-app-98585",
//     storageBucket: "fitness-app-98585.appspot.com",
//     messagingSenderId: "398197085378"
//   };
//   firebase.initializeApp(config);
// </script>
