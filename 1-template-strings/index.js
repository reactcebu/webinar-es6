// Not using template string syntax
let twinkle = function(noun, wonderAbout) {
  return (
    'Twinkle, twinkle, little ' +
    noun +
    '\nHow I wonder where you ' +
    wonderAbout
  )
}

// Using template string syntax
let twinkle = function(noun, wonderAbout) {
  return `Twinkle, twinkle, little ${noun}, How I wonder where you ${wonderAbout}`
}

// Template string allows multi-line strings
let twinkle = function(noun, wonderAbout) {
  return `Twinkle, twinkle, little ${noun}
  How I wonder where you ${wonderAbout}`
}

// Template string syntax detects new-line character
let twinkle = function(noun, wonderAbout) {
  return `
  Twinkle, twinkle, little ${noun}\nHow I wonder where you ${wonderAbout}
  `
}
