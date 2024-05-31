let box=document.getElementById('box')
console.log(box)


//1.innerHTML- sets of returns the HTML content (including html tags) of an element
console.log(box.innerHTML)
box.innerHTML = '<span>Hello world!!!</span>'
console.log(box.innerHTML)


//2.textContent - sets or returns the text content of an element, excluding html tags.
console.log(box.textContent)
box.textContent = 'Kamal Perera'
console.log(box.textContent)

//3.innerText - same as textContent. But , innerTextshows as DOM renders 
//while textContent shows only the textual content
console.log(box.innerText)
box.textContent = 'Nimal Perera'
console.log(box.innerText)

//4.Applying styles
let img1 = document.getElementById('img1')
console.log(img1)
img1.style.width = '100px'
img1.style.height = '100px'

//5.setAttributes
img1.setAttribute('src' , '/assets/heart-1192662_1280.jpg')

//6.classList-allows you to manipulate classes on an element
console.log(box.classList)
box.classList.add('aaa')
box.classList.add('bbb')
box.classList.add('ccc')

box.classList.remove('aaa')

box.classList.replace('bbb','mmm')

//7.append & appendChild
let parentDiv = document.createElement('div')
box.append(parentDiv)

let childDiv = document.createElement('div')
parentDiv.setAttribute('atpr' ,'new' )
parentDiv.appendChild(childDiv)

//8.remove & removeChild
parentDiv.removeChild(childDiv)
parentDiv.remove()




























