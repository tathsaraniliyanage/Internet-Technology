//1. setTimeout = executes a function once after a specific delay
//setTimeout(callback, delay)
let timeout = setTimeout(function(){
     console.log('Helooow')
},5000)
//cancel the timeout
clearTimeout(timeout)


//2. setInterval
// setInterval(callback , interval)

let interval = setInterval(() => {
    console.log('Heyyyyyyyyyy')
}, 5000);
//cancel the interval
clearInterval(interval)

//keti karama - meya wimata nm funtion ek aniwa udin tibiya yuthui
// let greet =()=>{
//     console.log('Heyyyyyyyyyyyyyyyyyyyyyyy')
// }
// let interval = setInterval(greet,1000)