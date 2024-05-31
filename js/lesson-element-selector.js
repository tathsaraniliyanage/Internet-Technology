console.log('Hey there')

//id selector
let calculateButton = document.getElementById('btnCalculate')
//btncalculate kiyna button ek tyna id ek calculatebutton kiyna variable ekata assign krnna
console.log(calculateButton)
calculateButton.style.backgroundColor = 'green'
//adala element(meke nm calculatebutton) ek allgena , style property ek call krla , style apply krnn pluwn
calculateButton.style.color = 'white'

let cancelButton = document.getElementById('btnCancel')
console.log(cancelButton)



//class selector
let boxes = document.getElementsByClassName('box')
console.log(boxes)

//tag selector
let headingOnes = document.getElementsByTagName('h1')
console.log(headingOnes)

//button click event listner
calculateButton.addEventListener('click', function(){
    console.log('Hello world!!!')
})

cancelButton.addEventListener('click', function(){
    alert('Hello world!!!')
})


cancelButton.addEventListener('click', let  = ()=>{
    alert('Hello world!!!')
})


// query selector
let button = document.querySelector('#btnCalculate')
console.log(button)

let testdiv =document.querySelector('.test-div')
console.log(testdiv)


let box = document.querySelectorAll('.box')
console.log(box)

let b = document.querySelectorAll('.box')
console.log(b)

let bb = document.querySelector('.box')
console.log(bb)

let box1 = document.querySelector('#container.box')
console.log(box1)

let box2 = document.querySelectorAll('#container.box')
console.log(box2)

// queryelecor - class ek wtil tiyna mulma element ek gnimta use krai
// querySelectorAll - class ek wtila tyna okkoma elements gnimata use krai