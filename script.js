const main = document.querySelector('div.main')
// console.log('div.main', main)
const container = document.querySelector('.container')

// on click div class container is removed
function emptyContainer (cont) {
  cont.remove()
}
//generate new container
function generateContainer () {
  const divCont = document.createElement("div");
  divCont.className = 'container'
  return divCont;
}

//add eventListener to Resume
const portfolioLink = document.getElementById("portfolio")
// append portfolio
portfolioLink.addEventListener('click', e => {
  console.log(`Portfolio link clicked`, e)
  emptyContainer(container)
  const divContainer = generateContainer()
  //new Image()
  const portfolio = new Image()
  portfolio.src = './images/generic-resume.jpeg'
  portfolio.alt = 'portfolio doc'
  portfolio.setAttribute('id', 'portfolio') 

  divContainer.append(portfolio)
  console.log('portfolio', portfolio)
  main.append(divContainer)
})


const contactLink = document.getElementById("contact")// append contact info
contactLink.addEventListener('click', e => {
  console.log(`Contact link clicked`, e)
})

const homeLink = document.getElementById("home")
homeLink.addEventListener('click', e => {
  console.log(`Home link clicked`, e)
})
// append homepage
