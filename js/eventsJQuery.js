// $(document).ready(function(){
//     console.log('executes ones the dom is fully loaded - jQuery')   
   

//     $('#box').css('background-color' , 'red');
//     $('#box').css('border-color' , 'yellow');
    
// })


$('#box').mouseover(function() {
    console.log('mouse over');
    $(this).css('background-color', 'crimson');
});

$('#box').mouseout(function() {
    console.log('mouse out');
    $(this).css('background-color', 'lightblue');
});

