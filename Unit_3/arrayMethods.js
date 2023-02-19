// ? Array Methods, awesome ways to do things with or to arrays

let food = ["Pecan Pie", "Shrimp", "Quesadilla", "Hotdog"];
//for(item of food){  console.log(item);
//}

// *  .push(), add item(s) to end of an array
food.push("Pizza");
console.log("Push method: ", food);

// * .splice(), splice(indices of where to remove, how many to remove, what to replace with/add) 
food.splice(1, 1, "Tacos");
console.log("Splice method: ", food); // Splice method:  [ 'Pecan Pie', 'Tacos', 'Quesadilla', 'Hotdog', 'Pizza' ]

food.splice(1, 0, "Steak");
console.log("Splice method: ", food);

// * .pop(), removes a value from the end of the array
food.pop();
console.log("Pop method: ", food);

// * .shift(), removes the first value of an array(value in first position)
food.shift();
console.log("Shift method: ", food);

// * .unshift(), adds to the front of an array, can include multiple items
food.unshift("cake", "sushi", "roti");

// .length, property not method
console.log(food.length);

//* .toString(), returns a string representation of the array
let rgb = ["red", "green", "blue"];
console.log("toString Method", rgb.toString());

//! Iteration Methods
/* 
    ? .filter() & .include()
    - does not destroy the original array
    - we typically store the filter array in a new variable
    - takes a call back function that returns either true or false
        - A callback function is another function that we invoke within our main function (a nested function)
    - loops through array 
    - MUST have a return
*/

let fruit = ["banana", "strawberry", "peach", "blackberry", "kiwi", "Mango"];

// Use filter to remove peach

//let filteredFruit = fruit.filter(fruit => {
   // let remainingFruit = fruit !== "peach" ;
    //console.log(`remaining fruit: ${remainingFruit}`);
    //return remainingFruit
//})
//console.log(filteredFruit);

// .include(), remove any fruit with "P"
let otherFruit = "Pineapple";
//console.log("Includes method:" , fruit.includes("p")); // false, .includes done on one item at a time. (single value at a time.)
console.log("include method: ", otherFruit.includes("P")); // true also not case sensitive

// .filter with .includes , remove any fruit with "p"

const filterFruit2 = fruit.filter((item) => !item.includes("p")); // case sensitive
console.log(filterFruit2);
// set the filtered array to variable, filter will run eatMango function per item in array
const filteredFruitFunctionEx = fruit.filter(eatMango);
// returns true if not mango, false if mango
function eatMango(fruit) {
    return fruit !== "Mango";
}

//printing to see final filtered array
console.log("Filter with Function ex: ", filteredFruitFunctionEx);

// ----------------------------------------------------------------------

// ? .forEach()
/* 
    Runs 3 arguments:
        - The value
        - The index
        - The array object itself

    - forEach() helps us iterate over an array performing a function once per element in the array via a callback function. 
    - Is not executed for empty elements
    - Does not change the original array
*/

let newFoodList = ["apple", "pear", "mushrooms", "cheese", "spaghetti"];

//for (let i = 0; i < newFoodList.length; i++) {
 //   console.log(newFoodList[i]);
//}

newFoodList.forEach((item) => console.log("ForEach Method: ", item));

newFoodList.forEach((item, i) => {
    console.log("ForEach with Index: ", item, i);
})

newFoodList.forEach(function (item) {
 console.log("Declaration sample: ", item);
})

// Build a function to console.log item
// Separating function from forEach
function displayFoodItem(foodThing) {
    console.log(`Function outside of forEach: ${foodThing}.`);
}
//function call
displayFoodItem("potato")

//Pass our forEach method the function
newFoodList.forEach(displayFoodItem);

// --------------------------------------------------------------

//? .map()
/* 
    - Creates a new array from calling a function for every array element 
    - Calls the function once per element in an array
    - Does not execute the function for empty elements 
    - Does not change the original array

*/

//Populated by for loop
let numArray = [];
// Populate by using .map on numArray
let fizzBuzzArray = [];

for (let k = 0; k <= 25; k++) {
    numArray.push(k);
}
// checking if numArray was populated
console.log("numArray: ", numArray);

// Simple ex first
numArray.map((x) => fizzBuzzArray.push(x + 5));
// If % by 3 print fizz, if % by 5 print buzz, if % by 3 & 5 print #(push to fizzBuzzArray)
numArray.map((x) => {
    // Use a conditional to check division
    if (x % 15 === 0) {
        fizzBuzzArray.push(x);
    } else if (x % 3 === 0) {
        fizzBuzzArray.push("Fizz");
    } else if (x % 5 === 0) {
        fizzBuzzArray.push("Buzz");
    }
})

//Check if fizzBuzzArray populated
console.log("fizzBussArray:", fizzBuzzArray);

// ? Map vs forEach example

let mainArr = [ 1, 2, 3, 4];
// .forEach does NOT return anything 
let forEachEx = mainArr.forEach((i) => i);
console.log("ForEach ex:", forEachEx);
// .map returns a new array
let mapEx = mainArr.map((i) => i + 3);
console.log("Map ex:", mapEx);

let secondMap = mapEx.map((i) => i + 5);
console.log("SecondMap Ex: ", secondMap);

// ? .find()

let tmnt = ["Mikey", "Donnie", "Leo", "Raph", "Splinter", "Shredder", "Baxter"];

let character = "Leo";
console.log(
  "Find Ex 1: ", 
  tmnt.find((c) => c === character)  
);

character = "April";
console.log(
    "Find Ex 2: ",
    tmnt.find((c) => c === character)
);

character = "Splinter"; // find will return true for splinter versus the value splinter bc we checked all items via including the index
console.log(
    "Find Ex 3: ",
    tmnt.find((c, i) => console.log(
        "Character: ", 
        c === character,
        "Index: ",
        i
    ))
);

/* 
  - Executes a function for each array element and returns the value of the first element that passes a test.
  - Returns undefined if no elements are found.
  - Does not execute the function for empty elements.
  - Does not change the original array.
*/