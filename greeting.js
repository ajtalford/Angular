var createOptions = function (employeeOptions) {
    var newOptions = {
        FirstName: 'fistName5', Lastname: 'lastName5',
        PhoneNumber: 'none ', Location: 'none', State: 'none',
        ZipCode: 0, Occupation: 'none', HourlyWages: 33
    };
    if (employeeOptions) {
        newOptions.PhoneNumber = employeeOptions.PhoneNumber;
        newOptions.Location = employeeOptions.Location;
        newOptions.State = employeeOptions.State;
        newOptions.ZipCode = employeeOptions.ZipCode;
        newOptions.Occupation = employeeOptions.Occupation;
        newOptions.HourlyWages = employeeOptions.HourlyWages;
    }
    return newOptions;
};
// employee class
var Employee = /** @class */ (function () {
    // constructor to initialize the props and 
    function Employee(firstName, lastName, phoneNumber, location, state, zipCode, occupation, hourlyWages) {
        // add hourlyWage property to person/Employee class
        this.HourlyWages = 33;
        this.FirstName = firstName;
        this.Lastname = lastName;
        this.PhoneNumber = phoneNumber;
        this.Location = location;
        this.State = state;
        this.ZipCode = zipCode;
        this.Occupation = occupation;
        this.HourlyWages = hourlyWages;
    }
    // methods to return combinations like Full name, Name and Phone Number, Location, etc.
    Employee.prototype.fullName = function () {
        return "Hi, this is " + this.FirstName + " " + this.Lastname;
    };
    // Name and Phone Number
    Employee.prototype.nameAndNum = function () {
        return this.FirstName + "'s phone number is " + this.PhoneNumber;
    };
    // Location
    Employee.prototype.location = function () {
        return this.FirstName + "'s is located in " + this.Location + " " + this.State + " " + this.ZipCode;
    };
    // All info
    Employee.prototype.fullInfo = function () {
        return "So now, this is " + this.FirstName + " " + this.Lastname + " your can reach " + this.FirstName + this.PhoneNumber + " " + this.FirstName +
            " works as a " + this.Occupation + " in " + this.Location + ", " + this.State + " " + this.ZipCode;
    };
    // weekly wage with num hours optional param. 
    Employee.prototype.totalWages = function (hours) {
        return ("Name: " + this.FirstName + " " + this.Lastname + "\n Weekly Wage: $" + this.HourlyWages * hours);
    };
    ;
    return Employee;
}());
// Create several people and, output their information to <div> sections in html.
var employee1 = new Employee("Jimmy ", " Hendrix ", "704-771-7387", "Atlanta", "Georgia", 17501, "Developer");
document.getElementById("e1").innerHTML = employee1.fullInfo();
var employee2 = new Employee("Jonathan ", " Long ", "704-724-3817", "Charlotte", "North Carolina", 28212, "Analyst", 12);
document.getElementById("e2").innerHTML = employee2.fullInfo();
var employee3 = new Employee("Noah ", "Jackson ");
document.getElementById("e3").innerHTML = employee3.totalWages(12);
// let employee13 = new Employee
//  wages here
// let wages = new Employee("Jonathan ", " Long ", "704-724-3817", "Charlotte", "North Carolina", 28212, "Analyst");
// let employee = new Employee("Noah ", "Jackson ");
// document.getElementById("e4").innerHTML = employee3.fullInfo();
// wages = document.getElementById("e6");
// If not presented, use a typical 40hrs to calculate wage. Display this in a area that states name of person and weekly wage.
// const employee7 = createOptions({
//     FirstName: 'fistName7', Lastname: 'lastName7', PhoneNumber: 'num7 ', Location: 'Location7', State: 'State7',
//     ZipCode: 11710, Occupation: 'Occupation7'
// });
// let employee8 = new Employee(FirstName: 'firstName8', Lastname: 'lastName8' );
// document.getElementById("e6").textContent = employee8.Occupation;
// console.log(employee7);
// console.log(employee8)
function sayHello(person) {
    return "Hello, " + person;
}
var user = "Super Student";
document.getElementById("para").innerHTML = sayHello(user);
