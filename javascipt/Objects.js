// Object declaration
let firstname ="Veeresh";
let person = {
    "firstName": "John",
    "lastName": "Doe",
    "age": 50,
    "isStudent": false,
    getting : function(){
        return "Hello, " + this.firstName + "!";
        }
  };
  
  // Accessing object properties
  console.log(person.firstName); // Output: John
  
  console.log(person["lastName"]); // Output: Doe
  // Calling object method
  console.log(person.getting()); // Output: Hello, John!
  