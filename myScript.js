// declaring variables and assigning values to them 
let x, y, z;      // let have block scope
                  // variables declared with var have ONLY Global Scope
x = 8;
y = 11;
z = x + y;

//Create a constant array 
const cars = ["Saab", "Volvo", "BMW"]; 

//Yet you can change the ELEMENTS of the array
cars[0] = "Toyota";

//Adding an element
cars.push("Audi");

document.getElementById("democars").innerHTML = cars;


//create an object
const car = {type:"Fiat", model:"500", color:"white"};


//You can change property
car.color = "red";


//You can also add a property
car.owner = "Johnson";

document.getElementById("car").innerHTML = "Car owner is " + car.owner;