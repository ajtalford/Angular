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
// this.FirstName = firstName;
//         this.Lastname = lastName;
//         this.PhoneNumber = phoneNumber;
//         this.Location = location;
//         this.State = state;
//         this.ZipCode = zipCode;
//         this.Occupation = occupation
// // 10.Create an interface called EmployeeOptions (PersonOptions if you didn't rename to Employee) where the name values are required but the other parameters are optional. 
// interface EmpOptions {
//     FirstName: string;
//     Lastname: string;
//     PhoneNumber?: string;
//     Location?: string;
//     State?: string;
//     ZipCode?: number;
//     Occupation?: string;
// }
// const createOptions = (
//     empOptions: EmpOptions
// ): { FirstName: string; Lastname: string; PhoneNumber: string; Location: string; State: string; ZipCode: number; Occupation: string; } => {
//     let newOptions = {
//         FirstName: 'fistName5', Lastname: 'lastName5',
//         PhoneNumber: 'none ', Location: 'none', State: 'none',
//         ZipCode: 0, Occupation: 'none'
//     }
//     if (empOptions.PhoneNumber) {
//         newOptions.PhoneNumber = empOptions.PhoneNumber;
//         newOptions.Location = empOptions.Location;
//         newOptions.State = empOptions.State;
//         newOptions.ZipCode = empOptions.ZipCode;
//         newOptions.Occupation = empOptions.Occupation;
//     }
//     return newOptions;
// }
// const employee7 = createOptions({
//     FirstName: 'fistName7', Lastname: 'lastName7', PhoneNumber: 'num7 ', Location: 'Location7', State: 'State7',
//     ZipCode: 11710, Occupation: 'Occupation7'
// });
// const employee8 = createOptions({ FirstName: 'firstName8', Lastname: 'lastName8' });
// console.log(employee7);
// console.log(employee8)
// // document.getElementById("e5").innerHTML = employee8();
// // var node = document.createElement("LI");                 // Create a <li> node
// var textnode = document.createTextNode(employee8.toString());          
// 4. Compile the file again with tsc to ensure the syntax is correct.
// 5. Create several people and, mimicing the method above, assign the output of some of their information to various <div> sections in your page.
// 6. Add a hourlyWage property to the person (and if you want, rename the class to Employee ). 
// 7. Add a function that calculates a weekly wage and takes the number of hours as an optional parameter. If not presented, use a typical 40hrs to calculate wage. Display this in a area that states name of person and weekly wage.
// NOTE: after each edit/save to the .ts file, you will have to compile and refresh the web page in the browser.
// 8.Create a property for a person's certifications/degrees that's an array ex: MBA, CSM, MCSD, etc. 
// 9.Create a function called addCerts() that takes an unknown number of
// arguments and adds them to the array.
// 10.Create an interface called EmployeeOptions (PersonOptions if you didn't rename to Employee) where the name values are required but the other parameters are optional. 
// 11. Create a method in the class that takes an option parameter and returns an Employee (Person) based on the options given. Implement this will a few different options to observe how it works. For additional reference: https://www.typescriptlang.org/docs/handbook/interfaces.html#optional-properties
// 12. Examine the compiled JavaScript file to see how the tsc changes TypeScript into JavaScript.
