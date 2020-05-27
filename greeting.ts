


// interface EmployeeOptions/Person 'only' name values required others are optional. 
interface EmployeeOptions {
    FirstName: string;
    Lastname: string;
    PhoneNumber?: string;
    Location?: string;
    State?: string;
    ZipCode?: number;
    Occupation?: string;
    HourlyWages?: number;

}

let createOptions = (
    employeeOptions: EmployeeOptions
): { FirstName: string; Lastname: string; PhoneNumber: string; Location: string; State: string; ZipCode: number; Occupation: string; HourlyWages: number;} => {
    let newOptions = {
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
        newOptions.HourlyWages = employeeOptions.HourlyWages
    }
    return newOptions;
}


// employee class
class Employee implements EmployeeOptions{
    FirstName: string;
    Lastname: string;
    PhoneNumber: string;
    Location: string;
    State: string;
    ZipCode: number;
    Occupation: string;
    // add hourlyWage property to person/Employee class
    HourlyWages: number = 33;

    // constructor to initialize the props and 
    constructor(firstName: string, lastName: string, phoneNumber?: string, location?: string, state?: string, zipCode?: number, occupation?: string, hourlyWages?: number) {
        this.FirstName = firstName;
        this.Lastname = lastName;
        this.PhoneNumber = phoneNumber;
        this.Location = location;
        this.State = state;
        this.ZipCode = zipCode;
        this.Occupation = occupation
        this.HourlyWages = hourlyWages;
    
    }

    // methods to return combinations like Full name, Name and Phone Number, Location, etc.
    fullName(): string {
        return "Hi, this is " + this.FirstName + " " + this.Lastname;
    }
    // Name and Phone Number
    nameAndNum(): string {
        return this.FirstName + "'s phone number is " + this.PhoneNumber;
    }

    // Location
    location(): string {
        return this.FirstName + "'s is located in " + this.Location + " " + this.State + " " + this.ZipCode;
    }

    // All info
    fullInfo(): string {
        return "So now, this is " + this.FirstName + " " + this.Lastname + " your can reach " + this.FirstName + this.PhoneNumber + " " + this.FirstName +
            " works as a " + this.Occupation + " in " + this.Location + ", " + this.State + " " + this.ZipCode;
    }

    
    // weekly wage with num hours optional param. 
  totalWages(hours?: number): string { 
        return ("Name: " + this.FirstName + " " + this.Lastname + "\n Weekly Wage: $" + this.HourlyWages * hours);
    };

}
// Create several people and, output their information to <div> sections in html.
let employee1 = new Employee("Jimmy ", " Hendrix ", "704-771-7387", "Atlanta", "Georgia", 17501, "Developer");
document.getElementById("e1").innerHTML = employee1.fullInfo();
let employee2 = new Employee("Jonathan ", " Long ", "704-724-3817", "Charlotte", "North Carolina", 28212, "Analyst", 12);
document.getElementById("e2").innerHTML = employee2.fullInfo();
let employee3 = new Employee("Noah ", "Jackson ");
document.getElementById("e3").innerHTML = employee3.totalWages();

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


function sayHello(person: string): string {
    return "Hello, " + person;
}
var user = "Super Student";
document.getElementById("para").innerHTML = sayHello(user);