// Example of literal objects
const myObject = {}

// Another example of literal object
const anotherObject = {
  inventory: inventory,
  inventoryValue: function () {},
  priceForTitle: function () {},
}

// Not implementing enhanced literal object syntax
function createBookshop() {
  return {
    inventory: inventory, 
    inventoryValue: function() {
      return this.inventory.reduce((total, book) => total + book.price, 0)
    },
    priceForTitle: function() {
      return this.inventory.find(book => book.title === title)
    },
  }
}

const inventory = [
  { title: 'Harry Potter', price: 10 },
  { title: 'Eloquent Javascript', price: 15}
]

const bookShop = createBookshop()



// Implementing enhanced literal object syntax
function createBookshop() {
  return {
    inventory,
    inventory() {
      return this.inventory.reduce((total, book) => total + book.price, 0)
    },
    priceForTitle() {
      return this.inventory.find(book => book.title === title)
    },
  }
}

const inventory = [
  { title: 'Harry Potter', price: 10 },
  { title: 'Eloquent Javascript', price: 15 },
]

const bookShop = createBookshop()
