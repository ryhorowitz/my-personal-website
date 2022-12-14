const main = document.querySelector('div.main')
const homeLink = document.getElementById("home")
const portfolioLink = document.getElementById("portfolio")
const contactLink = document.getElementById("contact")// append contact info
//re name to templateTable
const template = document.getElementById("contact-template")

// on click div class container is removed
function emptyContainer () {
  const container = document.querySelector('.container')
  container.remove()
}

function generateContainer () {
  const divCont = document.createElement("div");
  divCont.className = 'container'

  return divCont;
}

function generatePortfolio () {
  const portfolio = new Image()
  portfolio.src = './images/generic-resume.jpeg'
  portfolio.alt = 'portfolio doc'
  portfolio.setAttribute('id', 'portfolio') 
  
  return portfolio
}

function appendResume () {
  emptyContainer()
  const divContainer = generateContainer()
  const portfolio = generatePortfolio()
  
  divContainer.append(portfolio)
  main.append(divContainer)
}

function generateHeadshot () {
  const headshot = new Image()
  headshot.src = './images/headshot.jpeg'
  headshot.alt = 'Profile Picture'
  headshot.setAttribute('id', 'headshot')

  return headshot
}

function generateBio() {
  const bio = document.createElement('p')
  bio.className = 'bio'
  bio.innerText = 'Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.'
  return bio
}

function returnToHome() {
  emptyContainer()
  const divContainer = generateContainer()
  const headshot = generateHeadshot()
  const bio = generateBio()

  main.append(divContainer)
  divContainer.append(headshot)
  divContainer.append(bio)
}

function showContactList() {
  emptyContainer()
  const divContainer = generateContainer()
  const headshot = generateHeadshot()

  main.append(divContainer)
  divContainer.append(headshot)
  const contactNode = template.content.cloneNode(true)
  console.log(`contact node is ${contactNode}`)
  divContainer.append(contactNode)
}

// Click Handlers
homeLink.addEventListener('click', e => {
  returnToHome()
})

portfolioLink.addEventListener('click', e => {
  appendResume()
})

contactLink.addEventListener('click', e => {
  showContactList()
})
