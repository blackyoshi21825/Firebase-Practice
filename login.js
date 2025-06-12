import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARSa7Bs-0g55DBhi2EQvJ32BHlszCv8WY",
  authDomain: "daily-meal-planner-f96db.firebaseapp.com",
  projectId: "daily-meal-planner-f96db",
  storageBucket: "daily-meal-planner-f96db.firebasestorage.app",
  messagingSenderId: "494913060879",
  appId: "1:494913060879:web:7c346a989ca633f33b237a"
  }

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Check if user is already logged in
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, redirect to main page
    window.location.href = 'index.html';
  }
});

// Handle login form submission
document.getElementById('login-form').addEventListener('submit', (e) => {
  e.preventDefault();
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('error-message');
  
  // Clear previous error messages
  errorMessage.textContent = '';
  
  // Sign in with email and password
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      // Redirect to main page after successful login
      window.location.href = 'index.html';
    })
    .catch((error) => {
      // Handle errors
      const errorCode = error.code;
      switch(errorCode) {
        case 'auth/invalid-email':
          errorMessage.textContent = 'Please enter a valid email address.';
          break;
        case 'auth/user-not-found':
        case 'auth/wrong-password':
          errorMessage.textContent = 'Invalid email or password.';
          break;
        case 'auth/too-many-requests':
          errorMessage.textContent = 'Too many failed login attempts. Please try again later.';
          break;
        default:
          errorMessage.textContent = 'An error occurred. Please try again.';
      }
      console.error(error);
    });
});
