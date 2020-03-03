const books = [{ title: 'book1' }, { title: 'book2' }]

const newBook = { title: 'book3' }

// Adding item in the array without using spread syntax
const newBooks = books.concat([newBook]) // [{ title: 'book1' }, { title: 'book2' }, { title: 'book3' }]

// Adding item in the array using spread syntax
const newBooks = [...books, newBook] // [{ title: 'book1' }, { title: 'book2' }, { title: 'book3' }]



const book = {
  title: 'Harry Potter',
  author: 'J.K. Rowling',
}

// Adding a property in the object without using spread syntax
Object.assign(book, { soldCopies: 10000 })

// Adding a property in the object using spread syntax
book = { ...book, soldCopies: 10000 }



// Using rest operator in the function
// Using rest operator bundles up any number of specified arguments
// into an array
function sum(...arguments) {
  return arguments.reduce((previous, current) => {
    return previous + current
  })
}

console.log(sum(1, 2, 3)) // expected output: 6

console.log(sum(1, 2, 3, 4)) // expected output: 10

// Another example using rest operator
function myFunction(a, b, ...manyMoreArgs) {
  console.log("a", a)
  console.log("b", b)
  console.log("manyMoreArgs", manyMoreArgs)
}

myFun("one", "two", "three", "four", "five", "six")

// Console Output:
// a, one
// b, two
// manyMoreArgs, [three, four, five, six]
