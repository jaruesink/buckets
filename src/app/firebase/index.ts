import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

export const firebaseConfig = {
  apiKey: "AIzaSyBOlWSvPeZuM-U5Zc6SbIu4bS-NbNNhvJc",
  authDomain: "fir-app-8f3ba.firebaseapp.com",
  databaseURL: "https://fir-app-8f3ba.firebaseio.com",
  storageBucket: "fir-app-8f3ba.appspot.com",
  messagingSenderId: "696806146392"
};

export const firebaseAuthConfig = {
  provider: AuthProviders.Facebook,
  method: AuthMethods.Redirect
}

export function initializeFirebase() {
  return AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig);
}
