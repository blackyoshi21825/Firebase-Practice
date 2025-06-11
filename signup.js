import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoa318RgWQZV52F9Ggu0d5sXYrG4a_zn8",
  authDomain: "mini-digital-library.firebaseapp.com",
  projectId: "mini-digital-library",
  storageBucket: "mini-digital-library.firebasestorage.app",
  messagingSenderId: "877184779599",
  appId: "1:877184779599:web:9db9d832222906f8bef13a"
};

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

// Handle signup form submission
document.getElementById('signup-form').addEventListener('submit', (e) => {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('error-message');
  
  // Clear previous error messages
  errorMessage.textContent = '';
  
  // Create user with email and password
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("User created, setting display name:", name);
      // Add the user's name
      return updateProfile(userCredential.user, {
        displayName: name
      });
    })
    .then(() => {
      console.log("Display name set successfully");
      // Add a small delay before redirecting to ensure profile update completes
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 1000);
    })
    .catch((error) => {
      // Handle errors
      console.error("Error during signup:", error);
      const errorCode = error.code;
      switch(errorCode) {
        case 'auth/email-already-in-use':
          errorMessage.textContent = 'This email is already registered.';
          break;
        case 'auth/invalid-email':
          errorMessage.textContent = 'Please enter a valid email address.';
          break;
        case 'auth/weak-password':
          errorMessage.textContent = 'Password should be at least 6 characters.';
          break;
        default:
          errorMessage.textContent = 'An error occurred. Please try again.';
      }
      console.error(error);
    });
});
