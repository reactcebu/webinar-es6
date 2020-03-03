// Not using async and await syntax
img1
  .ready()
  .then(function() {
    // loaded
  })
  .catch(function() {
    // failed
  })



  // Using async and await syntax
async function loadImage() {
  const image = await img1.ready()
  try {
    // execute success handler
  } catch (error) {
    // execute failure handler
  }
}
