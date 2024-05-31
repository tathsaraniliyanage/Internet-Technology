
// let students = ['kamal' , 'vima' , 'saman' , 'kumara', 'kasuni', 'kamala' ,'vimala' , 'bimala', 'wasana']
// let mark = [92 , 73 , 78 , 100 , 12 , 38 , 59 , 62 , -10]

// // student[0] = 92
// // student[1] = 73

// function grading(mark) {
     
//      if(90<mark<100){
//       console.log('A+')
//      }else if(80<mark<89){
//         console.log('A')
//      } else if(75<mark<79){
//         console.log('A-')
//      } else if(65<mark<74){
//         console.log('B')
//      } else if(55<mark<64){
//         console.log('C')
//      } else if(35<mark<54){
//         console.log('S')
//      } else if(mark<35){
//         console.log('F')
//      } else if(mark=0){
//         console.log('Invalid Mark')
//      }
// }

// function getStudentGrade(students , mark) {
//   console.log('kamals grade for' , students[0] ,mark[0] )  
//   console.log('vimas grade for' , student[1] , mark[1])  
//   console.log('vimas grade for' , student[1] , mark[1])  
//   console.log('vimas grade for' , student[1] , mark[1])  
//   console.log('vimas grade for' , student[1] , mark[1])  
//   console.log('vimas grade for' , student[1] , mark[1])  
// }


// grading()
// getStudentGrade(students ,mark )
















// function grading(marks){
//     if(marks>=90){
//       return 'A+'
//     }else if(marks>=80){
//     return 'A-'

//     }else if(marks>=75){
//        return "A"
//     }else if(marks>=65){
//        return 'B'

//     }else if(marks>=55){
//        return " C"
       
    
//     }else if(marks>=35){
//        return "S"
//     }
//    else if(marks==35){
//     return "F"
   
//    }else{
//     return "Invalid marks"


//    }


// }

// let Student =['Kamal','Namal','Vimal','Supun','Nimal','LAHIRU', 'kAMTHI' , 'Wikum', 'Malith']
// let marks =[92,73,78,100,12,38,59,62,-10,30]


// function getStudent(Student , marks , grading){
//     console.log(Student[0],marks[0] )
//     console.log(Student[1],marks[1])
//     console.log(Student[2],marks[2])
//     console.log(Student[3],marks[3])
//     console.log(Student[4],marks[4])
//     console.log(Student[5],marks[5])
//     console.log(Student[6],marks[6])
//     console.log(Student[7],marks[7])
//     console.log(Student[8],marks[8])
//     console.log(Student[9],marks[9])

// }
// getStudent(Student , marks)






let studentsArray = [
    {
        name: 'kamal',
        marks: 92
    },
    {
        name: 'amal',
        marks: 73
    },
    {
        name: 'nimal',
        marks: 78
    },
    {
        name: 'john',
        marks:100
    },
    {
        name: 'saman',
        marks: 12
    },
    {
        name: 'sunil',
        marks: 38
    },
    {
        name: 'namal',
        marks: 59
    },
      {
        name: 'wasana',
        marks: 62
    },
    {
        name: 'yapa',
        marks: -10
    }
]

for(let i =0; i< studentsArray.length ; i++){
console.log(getStudentGrade(studentsArray[i].name , studentsArray[i].marks))
}

function calculateGrade(marks){
         if(marks>=90){
           return 'A+'
         }else if(marks>=80){
         return 'A-'
    
         }else if(marks>=75){
            return "A"
         }else if(marks>=65){
            return 'B'
    
         }else if(marks>=55){
            return " C"
           
        
         }else if(marks>=35){
            return "S"
         }
        else if(marks==35){
         return "F"
       
        }else{
         return "Invalid marks"
    
        }
    
    
     }


     function  getStudentGrade(studentName , marks) {
        return studentName + "\ s grade for" + marks + ":" +calculateGrade(marks)
        
     }