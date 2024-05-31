function addNumbers(num1 , num2) {
   return num1 + num2 
}


// Arrow Functions
const addNumberArrowFunc = (num1 , num2) => {
    return num1 + num2
}


const sayHello = () => 'Hello World'



console.log(addNumbers(10,20))
console.log(addNumberArrowFunc(10,20))
console.log(sayHello())





//converting named functions to arrow functions
const addNumber =(num1,num2) => num1 + num2
console.log(addNumber(10,20))

//converting anonymous functions to arrow function
let multiplyNumbers = (num1,num2) => num1 + num2




//converting constructor functions to arrow function 
//syntax wise this possible
//but , don't do this
//not supports 'this' , 'new' when using arrow functions.

//constructor function ekak hdanawa nm ek arrow functions wlin hdnn epa
// let Student=(name , age , email)=>{
//     this.name = name;
//     this.age = age;
//     this.email = email;
//  }
 
//  let student1 = new Student("kamal" , 38 , "kamal@gmail.com")

//  console.log(student1)
 
//  console.log('==============')



// callback function
let myFunction = (callback) => {
    callback()
}

let secondFunction = () =>{
    console.log('second function')
}

myFunction(secondFunction)

console.log('==============')
















