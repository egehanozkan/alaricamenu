// Firebase Configuration for Alarica Coffee Shop
// These keys are safe in client-side code — security is enforced by Firestore rules & Auth

const firebaseConfig = {
    apiKey: "AIzaSyB9qjxdJT_qJxWue8YpbYgARlRgXm9nTdU",
    authDomain: "alarica.firebaseapp.com",
    projectId: "alarica",
    storageBucket: "alarica.firebasestorage.app",
    messagingSenderId: "406352471575",
    appId: "1:406352471575:web:7b89d6c880e948799bde52"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize services
const auth = firebase.auth();
const db = firebase.firestore();
// Storage sadece admin sayfasında yüklenir (storage SDK dahil edildiğinde)
const storage = typeof firebase.storage === 'function' ? firebase.storage() : null;
