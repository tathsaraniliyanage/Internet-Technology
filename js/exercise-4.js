document.getElementById('number').addEventListener('keydown',function(event){
  console.log(event.keyCode)
  
  if(event.keyCode>=48 && event.keyCode<=57){
    // allow to type  
  }else{
    event.preventDefault()
    alert('numbers only')
  }

});


//   let textField = document.getElementById('text-field');
//   let number = document.getElementById('number');

//   let currentInput = number;
  
//  textField.forEach(textField => {
//     // textField.addEventListener('type', function() {
//         textField.addEventListener('keydown',(event)=>{
//         let value = this.querySelector('span').textContent;
//         event.preventDefault()
//         console.log('keydown :  ' + event.keyCode)
        
    
//         switch (value) {
            
//             case 0-9:
//                 try {
//                     // currentInput = eval(currentInput);
//                     console.log(currentInput)
//                 } catch (error) {
//                     currentInput = 'Error';
//                     console.log('error')
//                 }
//                 break;
           
//         }

//         textField.value = currentInput;
//     });
//   });

