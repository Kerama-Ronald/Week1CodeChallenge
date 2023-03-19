let input = prompt("Enter the Speed");
var speed = parseInt(input); // Only interger input will be accepted
const limit = 70; // The speed limit is 70 anything above attracts a point penalty 
if(speed <limit) {
    console.log("Ok") 
} else {
 let num = speed-limit;
 let points = Math.floor(num / 5); // here the points are divided by 5
 if(points <=12) { // criteria is set an executed
     console.log("Points:${points}") ;
 } else {
    console.log("License suspended");
 }


}