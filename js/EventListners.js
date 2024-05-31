//1. clickEvent

// let button = document.getElementById('btnAdd')
// button.addEventListener

document.getElementById('btnAdd').addEventListener('click', function(){
    console.log('Add to cart')
    alert('Add to cart')
})


//2.mouseover event
document.getElementById('box').addEventListener('mouseover',()=>{
    console.log('mouse over')
})


//3.mouseout event
document.getElementById('box').addEventListener('mouseout',()=>{
    console.log('mouse out')
})



// let img1 = document.getElementById('img1')
// console.log(img1)
// img1.style.width = '100px'
// img1.style.height = '100px'




// document.getElementById('box').addEventListener('mouseover' ,()=>{
//     console.log('mouse over')
//     this.style.backgroundColor = 'pink'
   
// })



box.addEventListener('mouseover' , ()=> {
    box.style.backgroundColor='red'
})
box.addEventListener('mouseout' , ()=> {
    box.style.backgroundColor='green'
})



//4.keydown event
// let userNameField = document.getElementById('userName')
// userNameField.addEventListener('keydown',(event)=>{
//   console.log('keydown' )
// })

// let userNameField = document.getElementById('userName')
// userNameField.addEventListener('keydown',(event)=>{
//   console.log('keydown' + event.key)
// })

let userNameField = document.getElementById('userName')
userNameField.addEventListener('keydown',(event)=>{
  console.log('keydown :  ' + event.keyCode)
})


//5.keyup

userNameField.addEventListener('keyup',(event)=>{
    console.log('keyup : ' + event.keyCode)
})



//6.submit event
document.getElementById('myForm').addEventListener('submit', (event)=>{
    //refresh wena ek nwathwimata yodai
    event.preventDefault()
    console.log('Form Submitted!')
})












