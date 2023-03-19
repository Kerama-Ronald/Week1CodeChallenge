var bsalary = prompt("Enter the basic salary: ")
var inputBenefits = prompt("Enter the Amount of Benefits: ")
var basicSalary = parseInt(bsalary)//Only interger input will be accepted
var Benefits = parseInt(inputBenefits)

function getNetSalary (basicSalary, Benefits) {
    return (basicSalary + Benefits) // when using return the output is stored
    }

var netsalo = getNetSalary(basicSalary, Benefits)

const getMonthlyTax = () => {
   if (netsalo=24000){
      return (netsalo*0.1)

    } else if(netsalo>24000 && netsalo<=32333) {
         return (netsalo*0.25)
    }
    else { 
      return (netsalo*0.3)
    }
}  

const NSSF = () => {
   // let netsalo =  netSalary()
    if (netsalo>6000)
    return (netsalo*0.06)
   }
   
const NHIF = () => {
   // let netsalo =  netSalary()
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
    else if( netsalo >= 70000 && netsalo <= 79999)
    {
         return (1400)
       }
    else if( netsalo >= 80000 && netsalo <= 89999)
    {
         return (1500)
       }
    else if( netsalo >= 90000 && netsalo <= 99999)
    {
          return(1600)
       }
    else if( netsalo >= 100000)
    {
        return (1700)
       }
    }
    const grossSalary = function(){
       // let netsalo =  netSalary()
        let nhif = NHIF()
        let nssf = NSSF()
        let monTax =  getMonthlyTax()
        return (netsalo - (nhif + nssf + monTax))
    }

    
const tax = getMonthlyTax();
const nhifDeductions = NHIF();
const nssfDeductions = NSSF();
const gSalary = grossSalary();
const nSalary = getNetSalary(basicSalary, basicSalary);

console.log(`PAYEE: ${tax}`)
console.log(`NHIF Deductions: ${nhifDeductions}`) // this is called  string intrapolation
console.log(`NSSF Deductions: ${nssfDeductions}`)
console.log(`Gross Salary: ${gSalary}`)
console.log(`Net Salary: ${nSalary}`)