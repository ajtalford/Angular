// document.getElementById("para").innerHTML = sayHello(user);
// class called 
var Employee = /** @class */ (function () {
    // Constructor 
    function Employee(firstName, lastName, phoneNumber, location, state, zipCode, occupation) {
        this.hourlyWages = 50;
        this.FirstName = firstName;
        this.Lastname = lastName;
        this.PhoneNumber = phoneNumber;
        this.Location = location;
        this.State = state;
        this.ZipCode = zipCode;
        this.Occupation = occupation;
    }
    // methods to return combinations lik Full name, Name and Phone Number, Location, etc.
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
        return "So now, this is " + this.FirstName + " " + this.Lastname + " your can reach " + this.FirstName + this.PhoneNumber + " " + this.FirstName + " works as a " + this.Occupation + " in " + this.Location + ", " + this.State + " " + this.ZipCode;
    };
    // Add hourlyWage property to person 
    // function that calculates a weekly wage and takes the number of hours as an optional parameter. // If not presented, use a typical 40hrs to calculate wage. Display this in a area that states name of person and weekly wage.
    Employee.prototype.totalWages = function (hours) {
        if (hours === void 0) { hours = 40; }
        return ("Name: " + this.FirstName + " " + this.Lastname + "\n Weekly Wage: $" + this.hourlyWages * hours);
    };
    return Employee;
}());
// 5. Create several people and, output their information to <div> sections in html.
var employee1 = new Employee("Jimmy ", " Hendrix ", "704-771-7387", "Atlanta", "Georgia", 17501, "Developer");
document.getElementById("e1").innerHTML = employee1.fullInfo();
var employee2 = new Employee("Jonathan ", " Long ", "704-724-3817", "Charlotte", "North Carolina", 28212, "Analyst");
document.getElementById("e2").innerHTML = employee2.fullInfo();
var employee3 = new Employee("Noah ", "Jackson ", "516-523-7843", "Brooklyn", "New York", 11710, "Designer");
document.getElementById("e3").innerHTML = employee3.fullInfo();
var wages = new Employee("Jonathan ", " Long ", "704-724-3817", "Charlotte", "North Carolina", 28212, "Analyst");
document.getElementById("e6").innerHTML = wages.totalWages();

