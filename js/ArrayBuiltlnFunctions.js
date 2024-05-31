let studentNames = ['lamal','amal','nimal']
console.log('Student Array : ' , studentNames)


//built-in functions

console.log('=========')

// 1. push - adds one or more elements to the end of array
studentNames.push('john' , 'marsh')
console.log('student array after push:' , studentNames)

// 2.pop-re from an array and returns that elementmove the last element
let poppedName =studentNames.pop()
console.log('pop name:' ,poppedName )
console.log('student array after poped:' , studentNames)

// 3.shift - remove the first element from an array and returns that element
let shiftedName = studentNames.shift()
console.log('shifter name : ' , shiftedName )
console.log('student array after  shifted :' ,studentNames)
console.log('0 index after shifted: ' , studentNames[0] )

// 4. unshiiift - adds one or more elements to the begining of an array
studentNames.unshift('josh', 'steve')
console.log('student array  after  unshifted :' ,studentNames)

// 5. concat - combines two or more arrays and returns a new array
//without modefing the exsisting arrays
let maleNames =['kusal' , 'dimuth' , 'pathum']
let femaleNames =['chamari' , 'nimali', 'ushani']

   // 5. 1 kramaya
console.log(maleNames.concat(femaleNames))

   // 5. 2 kramaya
let cricketers = maleNames.concat(femaleNames)
console.log('crikerters array :' , cricketers)

// 6. slice - returns the copy of a portion of an array into a new array
let fruits=['appple' , 'mango', 'orange' , 'avacado']
console.log('array after sliced from 0 index :' , fruits.slice(0))
console.log('array after sliced from 1 index :' , fruits.slice(1))
console.log('array after sliced from 2 index :' , fruits.slice(2))
console.log('array after sliced from 3 index :' , fruits.slice(3))

// 7.splice
let fruitsArray=['appple' , 'mango', 'orange' , 'avacado']
fruitsArray.splice(2,1,'mangoose')   // 2- index ek    // 1- point wechcha thena idn glwnn ona gana  // mangoose - remove krna ek wenuwata replace krnn ona mona value ekada kiyna ek
console.log('fruits array after splice :' , fruitsArray)


// 8.reverse
let letters = ['a' , 'b' , 'c' , 'd']
console.log('letters array : ' , letters)
console.log('reversed letters array  : ' , letters.reverse())


// sort - assending order ekata hadima  (desencing order ekta hann nm sort krla reverse krma hri)
let numbers = [10 , 40, 30 ,100 , 20]
console.log('numbers array  : ' , numbers)
console.log('numbers array after sorted : ' , numbers.sort())

// ascending order
console.log('numbers array after sorted ascending order : ' , numbers.sort())

//decending order
console.log('numbers array after sorted decensing order : ' , numbers.sort().reverse())


let testingArray =['amal','kamal','dog',100]
console.log('testing array : ' , testingArray)
console.log('testingArray 0 index : ' ,typeof testingArray[0])
console.log('testingArray 3 index : ' ,typeof testingArray[3])
