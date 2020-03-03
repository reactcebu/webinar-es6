// Creating a function expression without using arrow function
const map = function(callback, array) {
  const newArray = []
  for (let i = 0; i < array.length; i = i + 1) {
    newArray[i] = callback(array[i], i)
  }
  return newArray
}



// Creating a function expression using arrow function
const map = (callback, array) => {
  const newArray = []
  for (let i = 0; i < array.length; i = i + 1) {
    newArray[i] = callback(array[i], i)
  }
  
  return newArray
}



const numbers = [1, 2, 3]

// Not using arrow function inside a function call
const doubledArray = numbers.map(function(number) {
  return number * 2
})

console.log(doubledArray) // Returns [ 2, 4, 6 ]



// Using arrow function inside a function call
const doubledArray = numbers.map((number) => {
  return number * 2
})

console.log(doubledArray) // Returns [ 2, 4, 6 ]


// Using simplified version of anonymous function inside a function call
const doubledArray = numbers.map(number => number * 2)

console.log(doubledArray) // Returns [ 2, 4, 6 ]
