/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/



/*------------------------ Cached Element References ------------------------*/
const textBox = document.querySelector('input')
const pressMe = document.querySelector('button')
const biglist = document.querySelector('ul')


/*----------------------------- Event Listeners -----------------------------*/
pressMe.addEventListener('click', function(evt) {
  evt.preventDefault()
  let smallList = document.createElement('li')
  smallList.innerHTML = textBox.value
  textBox.value = ''
  biglist.appendChild(smallList)
})


/*-------------------------------- Functions --------------------------------*/