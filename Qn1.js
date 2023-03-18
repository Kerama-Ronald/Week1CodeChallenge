let input = prompt("Enter the Student's marks");
var marks = parseInt(input); //Only interger input will be accepted
// the user now input data that the following criteria will be run
if(marks>79 && marks<=100) {
     return 'A'
}
else if(marks>=60 && marks<=79){
     return 'B'
}
else if(marks>49 && marks<=59) {
     return 'C'
}
else if(marks>=40 && marks<=49) {
     return 'D'
}
else if(marks<40 && marks>0) {
     return 'E'
} else {
    return 'ERROR!!INVALID ENTRY' // incase a number above 0-100 is input
}