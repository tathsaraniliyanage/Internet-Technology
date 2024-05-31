function sayHello() {
    console.log('Hello World')
}

sayHello()


//step 1

function greeting(name){
    console.log('Good Morning ' + name)
}

greeting('kamal')
greeting()
greeting('kamal','perera')



//step 2
function greeting(firstName , lastName){
    console.log('Good Morning ' + firstName + ' ' + lastName)
}

greeting('kamal')
greeting()
greeting('kamal','perera')
greeting(1,2)


//step 3
function greeting(firstName , lastName){
    console.log('Good Morning ' + firstName + ' ' + lastName)
  return  firstName + ' ' + lastName
}

greeting('kamal')
greeting()
greeting('kamal','perera')
greeting(1,2)

let greetingReturnValue = greeting('nimal' , 'silva')
console.log(greetingReturnValue)
















