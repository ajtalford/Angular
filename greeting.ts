function sayHello(person: string): string {
    return "Hello, " + person;
}
var user = "Super Student";
document.getElementById("para").innerHTML = sayHello(user);


// employee class
class Employee implements EmployeeOptions{
    FirstName: string;
    Lastname: string;
    PhoneNumber: string;
    Location: string;
    State: string;
    ZipCode: number;
    Occupation: string;
    hourlyWages: number = 33;

    // 3. Create a constructor to initialize the props and 
    constructor(firstName: string, lastName: string, phoneNumber: string, location: string, state: string, zipCode: number, occupation: string) {
        this.FirstName = firstName;
        this.Lastname = lastName;
        this.PhoneNumber = phoneNumber;
        this.Location = location;
        this.State = state;
        this.ZipCode = zipCode;
        this.Occupation = occupation

    }

    // methods to return combinations lik Full name, Name and Phone Number, Location, etc.
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


  totalWages(hours: number): string {
       
        return ("Name: " + this.FirstName + " " + this.Lastname + "\n Weekly Wage: $" + this.hourlyWages * hours);
    };

}
// 5. Create several people and, output their information to <div> sections in html.
var employee1 = new Employee("Jimmy ", " Hendrix ", "704-771-7387", "Atlanta", "Georgia", 17501, "Developer");
document.getElementById("e1").innerHTML = employee1.fullInfo();
var employee2 = new Employee("Jonathan ", " Long ", "704-724-3817", "Charlotte", "North Carolina", 28212, "Analyst");
document.getElementById("e2").innerHTML = employee2.fullInfo();
var employee3 = new Employee("Noah ", "Jackson ", "516-523-7843", "Brooklyn", "New York", 11710, "Designer");
document.getElementById("e3").innerHTML = employee3.fullInfo();
var wages = new Employee("Jonathan ", " Long ", "704-724-3817", "Charlotte", "North Carolina", 28212, "Analyst");
document.getElementById("e6").innerHTML = wages.totalWages(this.hours);

// 6. Add hourlyWage property to person (and if you want, rename the class to Employee ). 

// 7. Add a function that calculates a weekly wage and takes the number of hours as an optional parameter. 
// If not presented, use a typical 40hrs to calculate wage.Display this in a area that states name of person and weekly wage.


