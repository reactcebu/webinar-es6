// Not using default function arguments
function makeAjaxRequest(url, method) {
  if (!method) {
    method = 'GET'
  }

  // logic to make request
}

makeAjaxRequest('google.com')
makeAjaxRequest('google.com', 'GET')

// Using default function arguments
function makeAjaxRequest(url, method = 'GET') {
  return method

  // logic to make request
}

makeAjaxRequest('google.com')
makeAjaxRequest('google.com', 'POST')



// Another example
function User(id) {
  this.id = id
}

function generateId() {
  return Math.random() * 9999999
}

function createAdminUser(user = new User(generateId())) {
  user.admin = true
  return user
}

createAdminUser()
// Or
const user = new User(generateId())
createAdminUser(user)
