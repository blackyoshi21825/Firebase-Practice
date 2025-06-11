  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
  import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";
  import { getFirestore, collection, addDoc, query, where, getDocs, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";
  import books from "./books.js";

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
  const db = getFirestore(app);

  // Global variables to track current filters
  let currentGenre = 'all';

  // Function to populate genre filter
  function populateGenreFilter() {
    const genreFilter = document.getElementById('genre-filter');
    const genres = new Set();
    
    // Collect all unique genres
    books.forEach(book => {
      genres.add(book.genre);
    });
    
    // Sort genres alphabetically
    const sortedGenres = Array.from(genres).sort();
    
    // Add genre options to the select element
    sortedGenres.forEach(genre => {
      const option = document.createElement('option');
      option.value = genre;
      option.textContent = genre;
      genreFilter.appendChild(option);
    });
    
    // Add event listener for filter changes
    genreFilter.addEventListener('change', filterBooksByGenre);
  }

  // Function to filter books by both genre and year
  function filterBooks() {
    const booksContainer = document.getElementById('books-container');
    booksContainer.innerHTML = ''; // Clear existing content
    
    // Apply both filters
    let filteredBooks = books;
    
    // Apply genre filter if not 'all'
    if (currentGenre !== 'all') {
      filteredBooks = filteredBooks.filter(book => book.genre === currentGenre);
    }
    
    if (filteredBooks.length === 0) {
      let message = 'No books found';
      if (currentGenre !== 'all') {
        message += ` in the "${currentGenre}" genre`;
      }
      message += '.';
      
      booksContainer.innerHTML = `
        <div class="no-books">
          <p>${message}</p>
        </div>
      `;
      return;
    }
    
    // Display filtered books
    filteredBooks.forEach(book => {
      const bookCard = document.createElement('div');
      bookCard.className = 'book-card';
      bookCard.dataset.id = book.id;
      bookCard.dataset.genre = book.genre;
      
      bookCard.innerHTML = `
        <div class="book-info">
          <div class="genre-badge">${book.genre}</div>
          <div class="book-title">${book.title}</div>
          <div class="book-author">by ${book.author}</div>
          <div class="book-year">${book.year}</div>
        </div>
      `;
      
      // Add click event to show details
      bookCard.addEventListener('click', () => showBookDetails(book));
      
      booksContainer.appendChild(bookCard);
    });
    
    // Apply genre-specific styling to badges
    applyGenreStyling();
  }

  // Function to filter books by genre
  function filterBooksByGenre() {
    currentGenre = document.getElementById('genre-filter').value;
    filterBooks();
  }

  // Function to set up all event listeners for filters
  function setupFilterListeners() {
    // Genre filter
    document.getElementById('genre-filter').addEventListener('change', filterBooksByGenre);
  }

  // Function to apply genre-specific styling to badges
  function applyGenreStyling() {
    const genreBadges = document.querySelectorAll('.genre-badge');
    
    genreBadges.forEach(badge => {
      // Apply the same styling to all badges
      badge.style.background = 'linear-gradient(to right, #4776E6, #8E54E9)';
    });
  }

  // Display books function
  function displayBooks() {
    // Reset filters
    currentGenre = 'all';
    
    // Reset filter UI
    document.getElementById('genre-filter').value = 'all';
    
    // Display all books
    filterBooks();
  }

  // Function to show book details
  function showBookDetails(book) {
    // Create modal element
    const modal = document.createElement('div');
    modal.className = 'book-modal';
    modal.dataset.genre = book.genre; // Add genre as data attribute
    
    modal.innerHTML = `
      <div class="modal-content">
        <span class="close-button">&times;</span>
        <div class="genre-badge modal-genre">${book.genre}</div>
        <h2>${book.title}</h2>
        <h3>by ${book.author} (${book.year})</h3>
        <p class="book-description">${book.description}</p>
        <div class="modal-buttons">
          <a href="${book.buyLink}" target="_blank" class="buy-button">Buy this book</a>
          <button class="save-button">Save for later</button>
        </div>
      </div>
    `;
    
    // Add modal to the page
    document.body.appendChild(modal);
    
    // Show the modal
    setTimeout(() => {
      modal.classList.add('show');
    }, 10);
    
    // Apply genre-specific styling to the badge in the modal
    const genreBadge = modal.querySelector('.genre-badge');
    switch(book.genre) {
      case 'Classic':
        genreBadge.style.background = 'linear-gradient(to right, #4776E6, #8E54E9)';
        break;
      case 'Dystopian':
      case 'Romance':
      case 'Coming-of-age':
      case 'Fantasy':
      case 'Magical Realism':
      case 'High Fantasy':
      case 'Psychological':
      default:
        genreBadge.style.background = 'linear-gradient(to right, #4776E6, #8E54E9)';
        break;
    }
    
    // Save button functionality
    const saveButton = modal.querySelector('.save-button');
    
    // Check if book is already saved
    checkIfBookSaved(book.id).then(isSaved => {
      if (isSaved) {
        saveButton.textContent = 'Remove from saved';
        saveButton.classList.add('saved');
      }
    });
    
    saveButton.addEventListener('click', async () => {
      const isSaved = await checkIfBookSaved(book.id);
      
      if (isSaved) {
        // Remove from saved
        await removeFromSaved(book.id);
        saveButton.textContent = 'Save for later';
        saveButton.classList.remove('saved');
        showNotification('Book removed from your saved list');
      } else {
        // Save the book
        await saveBook(book);
        saveButton.textContent = 'Remove from saved';
        saveButton.classList.add('saved');
        showNotification('Book saved for later');
      }
    });
    
    // Close button functionality
    const closeButton = modal.querySelector('.close-button');
    closeButton.addEventListener('click', (e) => {
      e.stopPropagation();
      modal.classList.remove('show');
      setTimeout(() => {
        document.body.removeChild(modal);
      }, 300);
    });
    
    // Close when clicking outside the content
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('show');
        setTimeout(() => {
          document.body.removeChild(modal);
        }, 300);
      }
    });
  }

  // Function to save a book to Firestore
  async function saveBook(book) {
    try {
      const user = auth.currentUser;
      if (!user) {
        console.error("User not logged in");
        return;
      }
      
      await addDoc(collection(db, "savedBooks"), {
        userId: user.uid,
        bookId: book.id,
        title: book.title,
        author: book.author,
        year: book.year,
        genre: book.genre,
        savedAt: new Date()
      });
      
      console.log("Book saved successfully");
    } catch (error) {
      console.error("Error saving book: ", error);
    }
  }

  // Function to check if a book is already saved
  async function checkIfBookSaved(bookId) {
    try {
      const user = auth.currentUser;
      if (!user) return false;
      
      const q = query(
        collection(db, "savedBooks"), 
        where("userId", "==", user.uid),
        where("bookId", "==", bookId)
      );
      
      const querySnapshot = await getDocs(q);
      return !querySnapshot.empty;
    } catch (error) {
      console.error("Error checking saved book: ", error);
      return false;
    }
  }

  // Function to remove a book from saved
  async function removeFromSaved(bookId) {
    try {
      const user = auth.currentUser;
      if (!user) return;
      
      const q = query(
        collection(db, "savedBooks"), 
        where("userId", "==", user.uid),
        where("bookId", "==", bookId)
      );
      
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(async (document) => {
        await deleteDoc(doc(db, "savedBooks", document.id));
      });
      
      console.log("Book removed from saved");
    } catch (error) {
      console.error("Error removing book: ", error);
    }
  }

  // Function to show notification
  function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
      notification.classList.add('show');
    }, 10);
    
    // Hide and remove notification after 3 seconds
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 3000);
  }

  // Listen for auth state changes
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      // User is not signed in, redirect to login page
      window.location.href = 'login.html';
    } else {
      // User is signed in
      console.log("User logged in:", user.email);
      
      // Display user's name
      const userNameElement = document.getElementById('user-name');
      if (userNameElement) {
        // Use displayName if available, otherwise use email or "User"
        const displayName = user.displayName || user.email.split('@')[0] || "User";
        userNameElement.textContent = displayName;
      }
      
      // Populate genre filter
      populateGenreFilter();
      
      // Setup filter event listeners
      setupFilterListeners();
      
      // Display books
      displayBooks();
    }
  });

  // Sign out functionality
  document.getElementById('sign-out-btn').addEventListener('click', () => {
    signOut(auth).then(() => {
      console.log("User signed out");
      window.location.href = 'login.html';
    }).catch((error) => {
      console.error("Sign out error:", error);
    });
  });

  // Add event listeners for view buttons
  document.getElementById('view-saved-btn').addEventListener('click', () => {
    document.getElementById('view-saved-btn').style.display = 'none';
    document.getElementById('view-all-btn').style.display = 'inline-block';
    displaySavedBooks();
  });

  document.getElementById('view-all-btn').addEventListener('click', () => {
    document.getElementById('view-all-btn').style.display = 'none';
    document.getElementById('view-saved-btn').style.display = 'inline-block';
    displayBooks();
  });

  // Function to display saved books
  async function displaySavedBooks() {
    const booksContainer = document.getElementById('books-container');
    booksContainer.innerHTML = '<div class="loading">Loading your saved books...</div>';
    
    try {
      const user = auth.currentUser;
      if (!user) return;
      
      const q = query(
        collection(db, "savedBooks"), 
        where("userId", "==", user.uid)
      );
      
      const querySnapshot = await getDocs(q);
      
      if (querySnapshot.empty) {
        booksContainer.innerHTML = `
          <div class="no-books">
            <p>You haven't saved any books yet.</p>
            <p>Go back to the main library and click on a book to save it for later.</p>
          </div>
        `;
        return;
      }
      
      booksContainer.innerHTML = '';
      
      // Get saved books
      const savedBooks = [];
      querySnapshot.forEach((doc) => {
        const savedBook = doc.data();
        savedBooks.push({
          id: savedBook.bookId,
          title: savedBook.title,
          author: savedBook.author,
          year: savedBook.year,
          genre: savedBook.genre,
          description: "Full details not available.",
          buyLink: "#",
          docId: doc.id // Store Firestore document ID for reference
        });
      });
      
      // Apply filters to saved books
      let filteredBooks = savedBooks;
      
      // Apply genre filter if not 'all'
      if (currentGenre !== 'all') {
        filteredBooks = filteredBooks.filter(book => book.genre === currentGenre);
      }
      
      if (filteredBooks.length === 0) {
        let message = 'No saved books found';
        if (currentGenre !== 'all') {
          message += ` in the "${currentGenre}" genre`;
        }
        message += '.';
        
        booksContainer.innerHTML = `
          <div class="no-books">
            <p>${message}</p>
            <p>Try adjusting your filters or go back to the main library.</p>
          </div>
        `;
        return;
      }
      
      // Display filtered saved books
      filteredBooks.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';
        bookCard.dataset.id = book.id;
        bookCard.dataset.genre = book.genre;
        
        bookCard.innerHTML = `
          <div class="book-info">
            <div class="genre-badge">${book.genre}</div>
            <div class="book-title">${book.title}</div>
            <div class="book-author">by ${book.author}</div>
            <div class="book-year">${book.year}</div>
          </div>
        `;
        
        // Find the full book details from our books array
        const fullBookDetails = books.find(fullBook => fullBook.id === book.id);
        
        // Add click event to show details
        bookCard.addEventListener('click', () => {
          if (fullBookDetails) {
            showBookDetails(fullBookDetails);
          } else {
            // If we don't have full details, use what we have from Firestore
            showBookDetails(book);
          }
        });
        
        booksContainer.appendChild(bookCard);
      });
      
      // Apply genre-specific styling to badges
      applyGenreStyling();
    } catch (error) {
      console.error("Error getting saved books: ", error);
      booksContainer.innerHTML = '<div class="error">Error loading saved books. Please try again.</div>';
    }
  }
