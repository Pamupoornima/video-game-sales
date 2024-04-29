// Define a function to greet the user
function greetUser(name) {
    alert("Hello, " + name + "! Welcome to the demo JavaScript file.");
}

// Define a function to calculate the area of a rectangle
function calculateArea(length, width) {
    return length * width;
}

// Define an object representing a person
var person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    gender: "male",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

// Call the greetUser function
greetUser("Alice");

// Calculate the area of a rectangle
var area = calculateArea(5, 10);
console.log("Area of the rectangle: " + area);

// Access properties of the person object
console.log("First Name: " + person.firstName);
console.log("Last Name: " + person.lastName);
console.log("Age: " + person.age);
console.log("Gender: " + person.gender);
console.log("Full Name: " + person.fullName());
