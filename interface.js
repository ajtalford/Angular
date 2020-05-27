var createOptions = function (empOptions) {
    var newOptions = {
        FirstName: 'fistName5', Lastname: 'lastName5',
        PhoneNumber: 'none ', Location: 'none', State: 'none',
        ZipCode: 0, Occupation: 'none'
    };
    if (empOptions.PhoneNumber) {
        newOptions.PhoneNumber = empOptions.PhoneNumber;
        newOptions.Location = empOptions.Location;
        newOptions.State = empOptions.State;
        newOptions.ZipCode = empOptions.ZipCode;
        newOptions.Occupation = empOptions.Occupation;
    }
    return newOptions;
};
var employee7 = createOptions({
    FirstName: 'fistName7', Lastname: 'lastName7', PhoneNumber: 'num7 ', Location: 'Location7', State: 'State7',
    ZipCode: 11710, Occupation: 'Occupation7'
});
var employee8 = createOptions({ FirstName: 'firstName8', Lastname: 'lastName8' });
console.log(employee7);
console.log(employee8);
// document.getElementById("e5").innerHTML = employee8();
// var node = document.createElement("LI");                 // Create a <li> node
// var textnode = document.createTextNode(employee8.toString());   
// document.getElementById("e5").innerHTML = createOptions(employee8);
