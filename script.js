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
  for (const i of library.books) {
    const book = makeElement(i)
    container.appendChild(book)
  }
}

function makeElement (book) {
  const element = document.createElement('div')
  element.classList.add('book')

  const div = document.createElement('div')
  div.classList.add('top')

  const img = document.createElement('img')
  img.setAttribute('src', './images/book.png')
  div.appendChild(img)

  const box = document.createElement('label')
  box.classList.add('switch')

  const check = document.createElement('input')
  check.setAttribute('type', 'checkbox')
  check.addEventListener('change', e => {
    if (e.target.checked) {
      element.style.opacity = '0.4'
    } else {
      element.style.opacity = '1'
    }
  })

  if (book.read) {
    check.checked = true
    element.style.opacity = '0.4'
  }

  box.appendChild(check)

  const slider = document.createElement('span')
  slider.classList.add('slider')
  box.appendChild(slider)

  div.appendChild(box)

  element.appendChild(div)

  const name = document.createElement('div')
  name.textContent = 'Title: ' + book.title
  element.appendChild(name)

  const author = document.createElement('div')
  author.textContent = 'Author: ' + book.author
  element.appendChild(author)

  const pages = document.createElement('div')
  pages.textContent = 'Number of Pages: ' + book.pages
  element.appendChild(pages)

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

// const div = makeElement()

// container.appendChild(div)

body.appendChild(container)
