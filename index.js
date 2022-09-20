//Book class: Represents a book
class Book {
  constructor(title, author, id) {
      this.title = title;
      this.author = author;
      this.id = id;
  }
}

// UI class: Handles UI Task
class UI {
  static displayBooks() {
      
      const books = store.getBooks();
      books.forEach ((book) => UI.addBookToList(book))
  }
  static addBookToList(book) {
      const list = document.querySelector('.main')
      const section = document.createElement('section')
      section.classList.add('list-holder')

      section.innerHTML = `<ul class="book-section">
      <div class="book-caption">
          <li class="title">"${book.title}"</li> 
          <li class="by">by</li>
          <li class="author">${book.author}</li>
          <li class="id">${book.id}</li>
      </div>
      <div>
          <li>
          <button class="del">Remove</button>
          </li>
      </div>
  </ul>
  `
  list.appendChild(section)
}

static deleteBook(el) {
    if(el.classList.contains('del')) {
        el.parentElement.parentElement.parentElement.parentElement.remove();
    (el.parentElement.parentElement.parentElement)
    }
}

static clearFields() {
     document.querySelector('#Title').value = '';  
     document.querySelector('#Author').value = ''; 
} 
}

// store class: Handles storage
class store {
static getBooks() {
    let books;
    if(localStorage.getItem('books') === null) {
        books = [];
    } else {
        books = JSON.parse(localStorage.getItem('books'))
    }
    return books;
}

static addBook(book) {
   const books = store.getBooks();

    books.push(book)
    localStorage.setItem('books', JSON.stringify(books))
}

static removeBook(id) {
    const books = store.getBooks();

    books.forEach((book, index) => {
        if(book.id === id) {
            books.splice(index, 1)
        }
    });
    localStorage.setItem('books', JSON.stringify(books))
}
}

// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);


document.querySelector('#book-form').addEventListener('submit', (e) => {
    e.preventDefault();
// Get values from form
    const title = document.querySelector('#Title').value;
    const author = document.querySelector('#Author').value;
// Generate random number per seconds
    const id = Date.now().toString();

// Instantiate book  
    const book = new Book(title, author,id);
    
    
// Add book to UI
    UI.addBookToList(book);
// Add book to store
    store.addBook(book);
// clear fields
    UI.clearFields();
})

// Event: Remove a book
document.querySelector('.main').addEventListener('click', (e) => {
const id = document.querySelector('.id')  
// Remove book from UI  
    UI.deleteBook(e.target)
// Remove from store 
store.removeBook(id.textContent)
})