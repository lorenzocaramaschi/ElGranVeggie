import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, addDoc, getDocs, updateDoc, deleteDoc, Firestore } from "firebase/firestore";
import mongoose from "mongoose";
import { config } from "../config/config.js";

export const firebaseConfig = {
    apiKey: "AIzaSyDrtAjygebcM0JJLjRGp34pOBvyeBqdAPs",
    authDomain: "ecommerce-a6c81.firebaseapp.com",
    projectId: "ecommerce-a6c81",
    storageBucket: "ecommerce-a6c81.appspot.com",
    messagingSenderId: "443748699051",
    appId: "1:443748699051:web:63d7028a772a392e0260ee",
    measurementId: "G-MEWZSZ35M4"
  };

let connectDb;

const connectMongo = async (url) => {
    await mongoose.connect(url);
};

const connectFirebase = async (url) => {
    getFirestore(initializeApp(firebaseConfig))
};

if (config.database === "MONGO") {
    connectDb = connectMongo;
} else {
    connectDb = connectFirebase;
}

export const db = { connectDb };