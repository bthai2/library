const body = document.querySelector('body')

class Book {
  constructor (title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
  }

  info () {
    let s = `${this.title} by ${this.author}, ${this.pages} pages, `;
    (this.read) ? s += 'read' : s += 'not read yet'
    return s
  }
}

class Library {
  constructor () {
    this.books = []
  }

  addBook (book) {
    if (!this.containsBook(book)) {
      this.books.push(book)
      updateDisplay()
    }
  }

  containsBook (book) {
    return this.books.some(b => book.title === b.title)
  }
}

function updateDisplay () {
  console.log('container.appendChild')
}

function makeElement () {
  const element = document.createElement('div')
  element.classList.add('book')

  const img = document.createElement('img')
  img.setAttribute('src', './images/book.png')
  element.appendChild(img)

  const name = document.createElement('div')
  name.textContent = 'Title: Harry Potter'
  element.appendChild(name)

  const author = document.createElement('div')
  author.textContent = 'Author: JK Rowling'
  element.appendChild(author)

  return element
}

const library = new Library()

const addButton = document.createElement('button')
addButton.classList.add('addBtn')
addButton.textContent = '+ Add Book'

addButton.addEventListener('click', () => {
  const name = prompt('Enter the name of the book')
  const author = prompt('Enter the author of the book')
  const numPages = prompt('How many pages are in the book')
  let read = ''
  let valid = false
  while (!valid) {
    read = prompt('Have you read the book yet (yes or no)?').toLowerCase()
    if (read === 'yes' || read === 'no') {
      valid = true
    }
  }
  const readBool = read === 'yes'
  const newBook = new Book(name, author, numPages, readBool)
  library.addBook(newBook)
})

body.appendChild(addButton)

const container = document.createElement('div')
container.classList.add('container')

const div = makeElement()

container.appendChild(div)

body.appendChild(container)
