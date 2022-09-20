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
