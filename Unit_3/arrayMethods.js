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

