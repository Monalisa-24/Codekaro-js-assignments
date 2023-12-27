// create an array called "fruits"
let fruits = [];

// add the fruits to the array : "apple", "banana", "orange"
fruits.push("apple");
fruits.push("banana");
fruits.push("orange");

console.log(fruits);

// remove the first fruit from the array
fruits.splice(0,1); // ["banana", "orange"]

// add "grape" to the end of the array
fruits.push("grape"); // ["banana", "orange", "grape"]

// update the second fruit in the array to "pear"
fruits.splice(1,1, "pear"); // ["banana", "pear", "grape"]


console.log(fruits);