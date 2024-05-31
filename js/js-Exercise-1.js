function addNumber(num1 , num2){
  return  num1 +  num2
}


function subNumber(num1 , num2){
  return  num1 - num2
}



function divideNumber(num1 , num2){
    return  num1 / num2
  }


function multiplyNumber(num1 , num2){
    return  num1 * num2
  }

console.log("add: " + addNumber(10,20));
console.log("sub: " + subNumber(10,20));
console.log("div: " +  divideNumber(10,20));
console.log("multi: " + multiplyNumber(10,20));


console.log('=============')


console.log("add: " + addNumber(10,'hi') + ' ~ ' + typeof addNumber(10 ,'hi'));
console.log("add: " + multiplyNumber(10,'hi') + ' ~ ' + typeof multiplyNumber(10 ,'hi'));
//NaN - Not a Number
console.log("add: " + divideNumber(10,'hi') + ' ~ ' + typeof divideNumber(10 ,'hi'));









