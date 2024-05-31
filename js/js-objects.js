// Student student = new Student()


//literal type
let student = {}
console.log('student : ' ,  student)
console.log('type of student : ' , typeof student)

student={
    firstName : 'kamal' ,
    lastName: 'perera',
    email: 'kamalperera34@gmail.com' ,
    phoneNumber : '0987654321',
    age : 17 ,
    isRegistered : true
}

console.log('student : ' , student)
console.log('student email : ' , student.email)


//objeect ekaka value retrive krgnna krama 2ki

// dot notation ek use krla value ekak retrive kara gnima
console.log('student email (using dot notation): ' , student.email)

//square brackets notation
console.log('student email (using square brackets notation): ' , student['email'])



//assigning values using dot notation
student.age = 20
console.log('student age : ' , student.age)
console.log('student : ' , student)

//assigning values using square brackets notation
student['age'] = 22
console.log('student age : ' , student.age)
console.log('student : ' , student)


let person = {
    name: 'kamal',
    age: 20,
    phone: '0789876567',
    // greet: function(){
    //     console.log('Hey Good Morning!')
    // }
    greet: ()=>{
        console.log('Hey Good Morning!')
    }
}
console.log(person.greet())


console.log('=========')



for(let key in person){
    console.log(key+':'+person[key])
}

console.log(person.age)
console.log(person['age'])