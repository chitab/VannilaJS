class Book{
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        
    }
}

class UI {
    static displayBooks() {
        const bookList = JSON.parse(localStorage.getItem('bookList'));
        bookList && Array.isArray(bookList) && bookList.forEach((book)=>{
            UI.addBookToList(book);
        })
    }
    static addBookToList(book){
        const list = document.querySelector('#book-list');
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><button class="remove-btn">X</button></td>
        `
        list.appendChild(tr);
    }
    static clearFields(){
        document.querySelector('#title').value = '';
       document.querySelector('#author').value = ''
       document.querySelector('#isbn').value = ''
    }

    static deleteBook(el) {
        if(el.classList.contains('remove-btn')){
            const isbn = el.parentElement.previousElementSibling.textContent;
            const getbookData = localStorage.getItem('bookList');
            const bookList = getbookData && JSON.parse(getbookData);
            bookList.forEach((book, index)=>{
                if(book.isbn ===  isbn){
                    bookList.splice(index, 1)
                }
            })
            el.parentElement.parentElement.remove();
            localStorage.setItem('bookList', JSON.stringify(bookList));
        }
    }
    static showAlert(){
        const div = document.createElement('div');
        div.appendChild(document.createTextNode('Books Deleted'));
        div.className = 'bookAdded';
        const container = document.querySelector('.container');
        console.log(div, container)
        header.parentNode.insertBefore(div, container);    
        setTimeout(()=>{
            document.querySelector('.bookAdded').remove();
        },3000)
    }
}


document.addEventListener('DOMContentLoaded', UI.displayBooks());
const btnClick = document.querySelector('.add_book');

btnClick.addEventListener('click', () => {
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;
    const book = new Book(title, author, isbn);
    let allBookList = [];
    const getbookData = localStorage.getItem('bookList');
    const bookList = getbookData && JSON.parse(getbookData);
    if(bookList){
        allBookList = bookList;
    }else{
        allBookList = [];
    }
    if(title === '' || author === '' || isbn === ''){
        console.log('hello')
    }else{
        UI.addBookToList(book);
        allBookList.push(book)
        localStorage.setItem('bookList', JSON.stringify(allBookList));
        UI.clearFields();
    }
})

const removeBtn =  document.querySelector('#book-list');
removeBtn.addEventListener('click', (e) =>{
    UI.deleteBook(e.target);
    UI.showAlert();
})
