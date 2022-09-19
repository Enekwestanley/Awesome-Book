const addBookToList = (myBook) => {
  const bookList = document.querySelector('.books');
  const nav = document.createElement('nav');
  nav.className = 'list-holder';

  nav.innerHTML = `
    <ul class="book-section">
    <li class="title">${myBook.title}</li> 
    <li class="author">${myBook.author}</li>
    <li class="d-none" id="del">${myBook.id}</li>
    <li>
    <button class="del">delete</button>
    </li>
    </ul>
    <div>
    <hr>
    </div>
    `;

  bookList.appendChild(nav);
};

const getBooks = () => {
  let books;
  if (localStorage.getItem('books') === null) {
    books = [];
  } else {
    books = JSON.parse(localStorage.getItem('books'));
  }

  return books;
};

const addBook = (book) => {
  const books = getBooks();
  books.push(book);
  localStorage.setItem('books', JSON.stringify(books));
};

const removeBook = (id) => {
  const books = getBooks();
  books.forEach((book, index) => {
    if (book.id === id) {
      books.splice(index, 1);
    }
  });
  localStorage.setItem('books', JSON.stringify(books));
};

const deleteBook = (el) => {
  if (el.className === 'del') {
    el.parentElement.parentElement.parentElement.remove();
  }
};

const displayBooks = () => {
  const books = getBooks();
  books.forEach((book) => {
    addBookToList(book);
  });
};

const addBtn = document.querySelector('.book-form');
addBtn.addEventListener('submit', (e) => {
  e.preventDefault();

  const bookTitle = document.querySelector('#Title').value;
  const bookAuthor = document.querySelector('#Author').value;

  const id = Date.now().toString();

  if (bookTitle && bookAuthor) {
    const book = {
      title: bookTitle,
      author: bookAuthor,
      id,
    };

    addBookToList(book);
    addBook(book);
  }

  const inputs = document.querySelectorAll('#Title, #Author');
  inputs.forEach((input) => {
    input.value = '';
  });
});
document.addEventListener('DOMContentLoaded', displayBooks());

const myBooks = document.querySelector('.books');
const del = document.querySelector('.d-none');
myBooks.addEventListener('click', (e) => {
  deleteBook(e.target);
  removeBook(del.textContent);
});
