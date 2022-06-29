import {getApp, getApps, initializeApp} from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBD6fUNEcSfQ9x-s7SHHbSiGq4-d1-z9oA",
    authDomain: "fooddelivery-app-007.firebaseapp.com",
    databaseURL: "https://fooddelivery-app-007-default-rtdb.firebaseio.com",
    projectId: "fooddelivery-app-007",
    storageBucket: "fooddelivery-app-007.appspot.com",
    messagingSenderId: "164573819974",
    appId: "1:164573819974:web:afe70fad94dac8f6b98647"
};


const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export {app, firestore, storage};