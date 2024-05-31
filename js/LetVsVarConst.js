function iterateNumber() {
    for(let i=0; i<=5 ;i++){
        console.log(i)
    }
}

iterateNumber()


console.log('==========')

// var - function-scoped
// let - block-scoped



function iterateNumber() {
    for(var i=0; i<=5 ;i++){
        console.log(i)
    }
}

iterateNumber()

function addNumber(num) {
    let b=5;
    if(num>0){
      var a = 10;
      console.log(b)
    }
    console.log(a)
   
}
addNumber(2);