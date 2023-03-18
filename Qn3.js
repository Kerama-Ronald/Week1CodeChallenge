let input = prompt("basicSalary");
let input2  = prompt("Benefits");
var basicSalary = parseInt(input); //Only interger input will be accepted
var Benefits = parseInt(input2)

function netSalary () {
    return (basicSalary + Benefits) // when using return the output is stored
    }
          
    const monthlyTax = function(){
     let netsalo =  netSalary()
        if (netsalo=24000){
        return (netsalo*0.1)
    }
    else if(netsalo>24000 && netsalo<=32333) {
         return (netsalo*0.25)
    }
    else { return (netsalo*0.3)
    }
   }
   const NSSF = function() {
    let netsalo =  netSalary()
    if (netsalo>6000)
    return (netsalo*0.06)
   }
   
   const NHIF = function() {
    let netsalo =  netSalary()
       if(netsalo<=5999){
        return (150)
       }
    else if( netsalo>=6000 && netsalo<=7999)
    {
        return(300)
       }

    else if( netsalo>=8000 && netsalo<=11999)
    {
        return(400)
       }
    else if( netsalo>=12000 && netsalo<=14999)
    {
         return (500)
       }
    else if( netsalo>=15000 && netsalo<=19999)
    {
        return (600)
       }
    else if( netsalo>=20000 && netsalo<=24999)
    {
        return (750)
       }
    else if( netsalo>=25000 && netsalo<=29999)
    {
         return (850)
       }
    else if( netsalo>=30000 && netsalo<=34999)
    {
        return (900)
       }
    else if( netsalo>=3500 && netsalo<=39999)
    {
        return (950) 
       }
    else if( netsalo>=40000 && netsalo<=44999)
    {
        return (1000)
       }
    else if( netsalo>=45000 && netsalo<=49999)
    {
         return (1100)
       }
    else if( netsalo>=50000 && netsalo<=59999)
    {
         return (1200)
       }
    else if( netsalo>=60000 && netsalo<=69999)
    {
         return (1300)
       }
    else if( netsalo>=70000 && netsalo<=79999)
    {
         return (1400)
       }
    else if( netsalo>=80000 && netsalo<=89999)
    {
         return (1500)
       }
    else if( netsalo>=90000 && netsalo<=99999)
    {
          return(1600)
       }
    else if( netsalo>=100000)
    {
        return (1700)
       }
    }
    const grossSalary = function(){
        let netsalo =  netSalary()
        return (netSalo-(NHIF+NSSF+monthlyTax))
    }