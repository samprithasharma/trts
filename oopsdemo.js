var Employee = /** @class */ (function () {
    function Employee(empcode, name) {
        this.empCode = empcode;
        this.empName = name;
    }
    Employee.prototype.displayName = function () {
        console.log("Name=" + this.empName + ",Employee Code=" + this.empCode);
    };
    return Employee;
}());
var emp = new Employee(100, "sam");
emp.displayName();
console.log("hbv");
