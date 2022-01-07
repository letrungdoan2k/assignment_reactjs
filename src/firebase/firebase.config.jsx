import * as firebase from "firebase/app";
import {getStorage} from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCZXHASGJhCbSH4QCp4SXnmql0kY4Q4kt8",
  authDomain: "we16201-7f01f.firebaseapp.com",
  projectId: "we16201-7f01f",
  storageBucket: "we16201-7f01f.appspot.com",
  messagingSenderId: "124067276844",
  appId: "1:124067276844:web:9d05c4689be94cef870989",
  measurementId: "G-FEZRLBD7LG"
};
// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
export const storage = getStorage();
export const auth = getAuth();

// const app = firebase.initializeApp(config);
// var storage = app.storage();