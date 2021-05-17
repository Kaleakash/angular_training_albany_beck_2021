var Employee = /** @class */ (function () {
    function Employee(id, name) {
        console.log("employee class object created...");
        this.id = id;
        this.name = name;
    }
    Employee.prototype.disEmpInfo = function () {
        console.log("employee function");
        console.log("id is " + this.id);
        console.log("name is " + this.name);
    };
    return Employee;
}());
/*
let emp1 = new Employee();
emp1.disEmpInfo();
let emp2 = new Employee();
emp2.disEmpInfo();*/
var emp3 = new Employee(101, "Ajay");
var emp4 = new Employee(102, "Vikash");
emp3.disEmpInfo();
emp4.disEmpInfo();
