// Type of Functions

// 1.Named Functions
function addNumber(num1 , num2){
    return num1 + num2 
}
console.log(addNumber(10,20))


console.log('==============')


// 2. Anonymous Functions

let multiplyNumbers = function(num1 , num2){
  return num1 * num2
}
 console.log(multiplyNumbers(10,20))

 console.log('==============')




// 3. Arrow Functions

let subNumbers = (num1 , num2) => {
    return num1-num2
}

//function ek eka line ekakin liyna wdiya 
// let subNumbers = (num1 , num2) => num1-num2


console.log(subNumbers(20,10))

 console.log('==============')




// 4.Constructor Function
function Student(name , age , email){
   this.name = name;
   this.age = age;
   this.email = email;
}

let student1 = new Student("kamal" , 38 , "kamal@gmail.com")

console.log(student1)

console.log('==============')


// 5. Callback Functions
function myFunction(number) {
    console.log(number)
}

//literal widiyata obj ekak define krna widiya
let person = {
  name: 'kamal',
  age: 30
}


myFunction('100')
myFunction(person)

let numbersArray = [1,2,3,4,5]
myFunction(numbersArray)

function secondFunction() {
    console.log('second function')
}
myFunction(secondFunction)

console.log('==============')


//6. Recursive Function

function factorial(n) {
    if(n == 0){
        return 1
    }
    return n * (factorial(n-1))
}
console.log(factorial(5))

console.log('==============')




