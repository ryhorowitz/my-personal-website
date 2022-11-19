const main = document.querySelector('div.main')
const container = document.querySelector('.container')
const homeLink = document.getElementById("home")
const portfolioLink = document.getElementById("portfolio")
const contactLink = document.getElementById("contact")// append contact info

// on click div class container is removed
function emptyContainer (cont) {
  cont.remove()
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

function appendResume (cont) {
  emptyContainer(cont)
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

portfolioLink.addEventListener('click', e => {
  appendResume(container)
})

contactLink.addEventListener('click', e => {
  console.log(`Contact link clicked`, e)
})

homeLink.addEventListener('click', e => {
  console.log('container', container)
  emptyContainer(container)

  const divContainer = generateContainer()
  const headshot = generateHeadshot()
  const bio = generateBio()
  // console.log('headshot', headshot)
  // headshot.append(bio)
  // main.append(headshot)
})

