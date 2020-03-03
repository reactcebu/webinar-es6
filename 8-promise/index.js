// The `Promise` object represents the eventual completion (or failure) 
// of an asynchronous operation, and its resulting value.

const img1 = document.querySelector('.img-1')

img1.addEventListener('load', function() {
  // woo yey image loaded
})

img1.addEventListener('error', function() {
  // argh everything's broken
})



const img1 = document.querySelector('.img-1')

function loaded() {
  // woo yey image loaded
}

if (img1.complete) {
  loaded()
} else {
  img1.addEventListener('load', loaded)
}

img1.addEventListener('error', function() {
  // argh everything's broken
})


// Events are not always the best
img1
  .callThisIfLoadedOrWhenLoaded(function() {
    // loaded
  })
  .orIfFailedCallThis(function() {
    // failed
  })

// and…
whenAllTheseHaveLoaded([img1, img2])
  .callThis(function() {
    // all loaded
  })
  .orIfSomeFailedCallThis(function() {
    // one or more failed
  })



img1.ready().then(
  function() {
    // success handler
  },
  function() {
    // failure handler
  }
)



img1
  .ready()
  .then(function() {
    // loaded
  })
  .catch(function() {
    // failed
  })



// and…
Promise.all([img1.ready(), img2.ready()]).then(
  function() {
    // all loaded
  },
  function() {
    // one or more failed
  }
)
