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
