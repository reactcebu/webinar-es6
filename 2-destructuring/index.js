// Destructuring with arrays
const books = ['Harry Potter', 'J.K. Rowling']

const [title, author] = books

console.log(title) // 'Harry Potter'
console.log(author) // 'J.K. Rowling'

// Destructuring with objects
const book = {
  title: 'Harry Potter',
  author: 'J.K. Rowling',
}

const { title } = book
const { author } = book

console.log(title) // 'Harry Potter'
console.log(author) // 'J.K. Rowling'

// Not using destructuring in functions
function log(book) {
  console.log(book.title)
  console.log(book.author)
}

// Using destructuring in functions
function log({ title, author }) {
  console.log(title)
  console.log(author)
}
