import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDN8ycIbRZaoPvT8tUkRuDhSAm1V6R1v0A",
    authDomain: "fir-595e6.firebaseapp.com",
    databaseURL: "https://fir-595e6.firebaseio.com",
    storageBucket: "fir-595e6.appspot.com",
    messagingSenderId: "913680197438"
};

firebase.initializeApp(config);
export const database = firebase.database();

export const storage = firebase.storage();

export const fbAuth = firebase.auth();
