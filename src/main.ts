import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCjOVfzSIMCxdFKn9yMoJ9Y16dgT7SNt8E",
  authDomain: "beautyedits-a45fe.firebaseapp.com",
  databaseURL: "https://beautyedits-a45fe-default-rtdb.firebaseio.com",
  projectId: "beautyedits-a45fe",
  storageBucket: "beautyedits-a45fe.appspot.com",
  messagingSenderId: "850933896918",
  appId: "1:850933896918:web:6451765fe2407bcdbb9b77",
  measurementId: "G-JWKWCEXRLF"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional