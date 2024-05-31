//there are 6 types in jaavascript

//1.String
let firstName="kamal"
console.log('type of firstname : ' , typeof firstName)


//2.Number
let age=30;
console.log('type of age :' , age)

let distancekm = 3.25;
console.log('type of distancekm :' , distancekm)

//3.boolean
let isAdded=true;
console.log('type of isAdded :' , isAdded)
let isDeleted= false;
console.log('type of isDeleted:' , isDeleted)

//4.undefined
let address;
console.log('type of address : ' , typeof address)

let email;
console.log('type of email : ' , typeof email)


//5.null - represents the intentional absence of any object value.It is a primitive value that
let phoneNumber=null
console.log('type of phoneNumber : ' , typeof phoneNumber)


//6.symbol - introduced in ECMAScript 6,(ES6) , symbols are unique and immutable primitive values.
let symbol =    Symbol('First Name')
console.log('type of symbol : ' ,typeof symbol )


// 7.BigInt
const number1 = 45634354634634374354567456745346574n
const number2 = 100;

const result = number1 + BigInt(number2);
console.log('result', result)







