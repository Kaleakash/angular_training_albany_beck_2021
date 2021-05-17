// Normal style function 
function info() {
    console.log("Normal style function");
}
info();
// Expression style function with name
let dis = function display() {
    console.log("Expression style function")
}
dis();
//expression style function with anonymous function 
let dis1  = function() {
    console.log("Expression style with anonymous function")
}
dis1();
// function with number parameter as well as data type 

// function with number of parameter as well as type of parameter must 
// match 
function empInfo(id:number,name:string,age:number){

}
empInfo(100,"Ramesh",21);

// optional parameter with operator ?
//optional operator we have to use from right to left 
// we have to apply for all arguments or few but from right to left.
function studentInfo(sid:number,sname?:string,age?:number){
    console.log(sid)
    console.log(sname)
    console.log(age)
}
studentInfo(1,"Ramesh",21);
studentInfo(2,"Raj")
studentInfo(3)
// default initialization 
function productInfo(pid:number=123,pname:string="Unknown",price:number=100){
    console.log(pid);
    console.log(pname)
    console.log(price);
}
productInfo(100,"TV",550000);
productInfo(102,"Pen")
productInfo(103);
productInfo();

// function with return string value 
function sayHello() : string {
    return "Welcome";
}
//function with return number value 
function add(a:number,b:number):number{
    return a+b;
}
// function no return type 
function information():void {
        console.log("Welcome")
        //return 100;
}
//function with any return any type or no return type
function hello() :any {
    //return 100;
    //return "Welcome"
    //return true;
}
//Rest and Spread operator or parameter 
function employeeInfo(id:number,name:string,salary:number,...skillSet:string[]){//REST
    console.log(id)
    console.log(name)
    console.log(salary)
    console.log("Number of skillSet"+skillSet.length)
}
let skill:Array<string>=["Angular","Python","ReactJS"]
employeeInfo(1,"Ravi",12000);       //0
employeeInfo(2,"Raju",15000,"C");   //1
employeeInfo(3,"Raj",25000,"HTML5","CSS3","JavaScript","Angular");  //many
employeeInfo(4,"Ajay",3500,skill[0],skill[1],skill[2]);
employeeInfo(5,"Vijay",38000,...skill);     // spread operator 



//arrow function 

//callback function 


