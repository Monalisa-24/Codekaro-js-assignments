// // Create an empty array "cars"
// let cars = [];

// // Create three car objects with the following properties
// let car1 = {
//   no: 1,
//   make: "Toyota",
//   model: "Camry",
//   year: 2018
// };

// let car2 = {
//   no : 2,
//   make: "Toyota",
//   model: "Camry",
//   year: 2018
// };

// let car3 = {
//   no : 3,
//   make: "Toyota",
//   model: "Camry",
//   year: 2018
// };

// // Add the car objects to the "Cars" array
// cars.push(car1);
// cars.push(car2);
// cars.push(car3);

// console.log(cars);

// // Remove the first car object from the "Cars" array
// cars.splice(0, 1);

// console.log(cars);


// let car4 = {
//   no:4,
//   make: "Honda",
//   model: "Civic",
//   year: 2020
// };

// // Add a new car object to the "Cars" array
// cars.push(car4);


// // Update the "model" property of the second car object in the array to "Accord"
// cars[1].model = "Accord";

// console.log(cars);


// Create an empty array "cars"
let cars = [];

// Create three car objects with the following properties
let car1 = {
  no: 1,
  make: "Toyota",
  model: "Camry",
  year: 2018
};

let car2 = {
  no: 2,
  make: "Toyota",
  model: "Camry",
  year: 2018
};

let car3 = {
  no: 3,
  make: "Toyota",
  model: "Camry",
  year: 2018
};

// Add the car objects to the "Cars" array
cars.push(car1);
cars.push(car2);
cars.push(car3);

console.log(cars.map(car => ({ no: car.no, make: car.make, model: car.model, year: car.year })));

// Remove the first car object from the "Cars" array
cars.splice(0, 1);

console.log(cars.map(car => ({ no: car.no, make: car.make, model: car.model, year: car.year })));

let car4 = {
  no: 4,
  make: "Honda",
  model: "Civic",
  year: 2020
};

// Add a new car object to the "Cars" array
cars.push(car4);

// Update the "model" property of the second car object in the array to "Accord"
cars[1].model = "Accord";

console.log(cars.map(car => ({ no: car.no, make: car.make, model: car.model, year: car.year })));
