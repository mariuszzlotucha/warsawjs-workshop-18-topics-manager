import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import "babel-polyfill";
import {App} from './src/App';

var config = {
    apiKey: "AIzaSyBZai4ODQUqmyEFzlTpxmkUn9qJRXUpTfI",
    authDomain: "warsawjs-workshop-18-a0b8a.firebaseapp.com",
    databaseURL: "https://warsawjs-workshop-18-a0b8a.firebaseio.com",
    projectId: "warsawjs-workshop-18-a0b8a",
    storageBucket: "warsawjs-workshop-18-a0b8a.appspot.com",
    messagingSenderId: "1003637377904"
  };
  firebase.initializeApp(config);
var database = firebase.database();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);