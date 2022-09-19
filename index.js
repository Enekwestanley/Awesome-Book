const displayBooks = () => {
    const storedBooks = [
        {
            title: 'Nobody',
            author: 'Samuel',
            id: 1,
        },
        
        {
            title: 'Somebody',
            author: 'peter',
            id: 2,
        }
    ]
     const books = getBooks();
    books.forEach(book =>{
        addBookToList(book)
    });

   
    
    
}

const addBookToList = (myBook) => {
    const bookList = document.querySelector('.books')
    const nav = document.createElement('nav')
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
    `
    
    bookList.appendChild(nav);

    
}

const getBooks=() => {
    let books;
    if(localStorage.getItem('books') === null) {
        books = [];
    }else {
        books = JSON.parse(localStorage.getItem('books'));
    
    }

    return books;
}

const addBook = (book) => {
    const books = getBooks();
    books.push(book);
    localStorage.setItem('books',JSON.stringify(books));
}

const removeBook = (id) => {
    const books = getBooks();
    books.forEach((book,index) => {
     if(book.id === id){
        books.splice(index,1)
     }
    })
    localStorage.setItem('books',JSON.stringify(books))
}

const deleteBook = (el) => {
    if(el.className =='del'){
        el.parentElement.parentElement.parentElement.remove();
    }
}

