import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"ringoffire-2b8fa","appId":"1:1071297205402:web:00a650711b33d46b3bfb23","storageBucket":"ringoffire-2b8fa.firebasestorage.app","apiKey":"AIzaSyCjjfgejLJDdaTf8WPJT_ENw0o2AQB77AU","authDomain":"ringoffire-2b8fa.firebaseapp.com","messagingSenderId":"1071297205402"}))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
