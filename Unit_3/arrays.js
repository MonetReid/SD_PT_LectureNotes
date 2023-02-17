/* 
    ? Unit 2: Data Structures
    - How we organize our data.
    - Utilize arrays and objects and use functions to interact with them.

    ? Array
    - Denoted with square brackets [ ]
    - Indices start at zero
        * indices do not reflect the length of the array
    - Using a property "length", we can find the sum/total of data stored in the array
*/

// Indices    0         1        2         3
let list = ["milk", "bread", "chicken", "butter",];
console.log(list[2]); // chicken

console.log(list.length); // 4

console.log(list[list.length]); // undefined

console.log(list[list.length -1]); // butter 
// If needing to find the highest indices don't forget to subtract one because it starts at 0

// reassign array values
list[0] = "chocy milk";

console.log(list);

// Example 2:
// Indices        0     1    2      3        4        5(Nested array)             6
let avengers = ["Nick", 5, true, "Steve", "Bruce", ["Tony", true, 100], "Natasha"];

// We can use instanceof to check if an array returns a true or false value- "Is this an array? Yes or No"
console.log(avengers instanceof Array); // true

console.log(avengers[5][2]); //100

/* 
    try building out and console.logging its values later!
*/
