//javascript control flows

// ==== 1. if / else / else if

let number = -10 ;

if(number > 0){
   console.log('positive number')
}else if (number< 0){
    console.log('negative number')
}else{
    console.log('zero')
}



// switch statement

let dayOfWeek = 1;
let dayName;

switch(dayOfWeek) {
    case 1:
        dayName=' sunday';
      break;
    case 2:
        dayName = 'monday';
      break;
    case 3:
        dayName = 'tuesday';
      break;
    case 4:
        dayName = 'wednesday';
      break;
    case 5:
        dayName = 'thursday';
      break;
    case 6:
        dayName = 'friday';
      break;
    case 7:
        dayName =' saturday';
   default:
    dayName=' invalid'
  }

  console.log(dayName);




  //loops
  // 1.for loop
  for(let i=0 ; i<=0 ;i++ ){
       console.log(i)
  }


  console.log('=========')



// 2. while loop
let i=0;
while(i>2){
    console.log(i)
}


console.log('=========')     




//dowhile loop
let j= 0;
do{
    console.log(j);
    j++;
}while(j<5);

console.log('=========')



// 4. break
for(let n=0 ; n<5 ; n++){
    if(n===4){
        break;
    }
    console.log(n)
}

console.log('=========')


//5.continue
for(let n=0 ; n<5 ; n++){
    if(n===3){
       continue;
    }
    console.log(n)
}

console.log('=========')





//== vs ===
let num=5;
if(num==5){
    console.log('Hey')
}


console.log('=========')
if(num===5){
    console.log('Hey')
}



console.log('=========')
let num1='5'
if(num1==5){
    console.log('Hey')
}


//****important*****
// === checks both values and types
// == checks only the values








