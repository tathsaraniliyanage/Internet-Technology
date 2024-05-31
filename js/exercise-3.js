// let i=setInterval(function(){
  
// for(let i=0; i<=10 ; i++){
//     console.log(i)
//   }
// },2000)




// let count=0;
// let intervalId = setInterval(()=>{
//     count++
//     console.log(count)
//     if(count===10){
//         clearInterval(intervalId)
//     }
// },1000)


let interval = setInterval(() => {
    console.log('ABCD')
}, 500);
let timeout = setTimeout(()=>{
    // console.log('ABCD')
    clearInterval(interval)
},5000)

// clearTimeout(timeout)



// let interval = setInterval(() => {
//     let timeout = setTimeout(()=>{
//         console.log('ABCD')
        
//     },5000)
//     clearTimeout(timeout)
    
// }, 500);


