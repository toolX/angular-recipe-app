import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase/app';
import 'firebase/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCaNdJTY39Q-ugOPrQ9xgXYZImTPjxNd0A',
      authDomain: 'max-http-89c28.firebaseapp.com',
    });
  }
}
