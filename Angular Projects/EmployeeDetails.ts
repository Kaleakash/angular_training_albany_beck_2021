class Employee {
    //id:number;
   // name:string
    constructor(public id:number,private name:string) {
        console.log("employee class object created...")
        //this.id = id;
       // this.name = name;
    }
    getName():string {
        return this.name;
    }
    disEmpInfo():void {
        console.log("employee function")
        console.log("id is "+this.id);
        console.log("name is "+this.name);
    }
}
/*
let emp1 = new Employee();
emp1.disEmpInfo();
let emp2 = new Employee();
emp2.disEmpInfo();*/
let emp3 = new Employee(101,"Ajay");
let emp4 = new Employee(102,"Vikash");
emp3.disEmpInfo();
emp4.disEmpInfo();
console.log(emp3.id)    // public we can access outside through object 
//console.log(emp3.name)          // private can't access outise through object 