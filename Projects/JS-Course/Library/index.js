const myLibrary = [];

const container = document.querySelector('#container');


function Book(author, title, pages) {
  // the constructor...
  this.author = author
  this.title = title
  this.pages = pages
  this.read = false
  
}

function addBookToLibrary(book) {
  // do stuff here
  myLibrary.push(book)
}