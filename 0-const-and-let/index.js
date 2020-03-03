// Declaring a variable using `var` has implications in the browser
// Every time you declare a variable in the global scope,
// the declared variable attaches itself on the `globalThis` or `window` object,
// therefore, polluting the global scope
var myVariable


// Declaring a variable using 'const' and 'let',
// creates a `block` scope, meaning it when the code is read
// in the browser, it doesn't attach itself on the global scope
const bar

let foo
