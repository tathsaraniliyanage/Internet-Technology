
// let interval = setInterval(() => {
//     console.log('Heyyyyyyyyyy')
// }, 5000);
// //cancel the interval
// clearInterval(interval)



// let i=setInterval(function(){
  
// for(let i=0; i<=10 ; i++){
//     console.log(i)
//   }
// },2000)



let count=0;
let intervalId = setInterval(()=>{
    count++
    console.log(count)
    if(count===10){
        clearInterval(intervalId)
    }
},1000)