/* 
?   Array Destructuring 

    - Allows us to unpack values from arrays into distinct variables
    - Similar syntax to array literals, but the [] square brackets are on the left side of the assignment operator (=)
    - Great way to pull info from the array and assign to it's own variable
*/

// WITHOUT Destructuring
//const fullName = ["Kate", "Lockhart"];
//const firstName = fullName[0];
//const lastName = fullName[1];
//console.log(firstName, lastName);

// WITH Destructuring 
const fullName = ["Kate", "Lockhart"];
let [firstName, lastName] = fullName;
console.log(firstName);
console.log(lastName);
console.log(firstName, lastName);

// -------------------------------------------------

/* 
?  Spread Operator

    - The spread operator basically pulls out the elements of an array as a stand alone list of elements

    Denoted by three consecutive periods: ...Array
*/

const myName = ["Kate", "Lockhart"];
const copiedName = [...myName]; // The spread operator inserts the elements from fullName
console.log("Copied w/ spread operator: ", copiedName);// Copied w/ spread operator:  [ 'Kate', 'Lockhart' ]

const anotherCopy = [myName]; // This inserts the array as a whole 
console.log("Copied w/o spread operator: ", anotherCopy) // Copied w/o spread operator:  [ [ 'Kate', 'Lockhart' ] ]

// An example with numbers: 
let numberArray = [];

for (i = 0; i <= 20; i++) {
    numberArray.push(i);
    
}
console.log(numberArray);

const newNumberArray = [... numberArray];
console.log(newNumberArray);
// The spread operator "copied" the first state of my name, the copy did not update but the original can.
myName.unshift("Miss");
console.log("My Name:", myName);  //My Name: [ 'Miss', 'Kate', 'Lockhart' ]
console.log("Copied Name", copiedName);// Copied Name [ 'Kate', 'Lockhart' ]

// Math.min, Returns the smaller of a set of supplied numeric expressions.
console.log(Math.min(1,5,13,-3)); // -3

const prices = [10.99, 5.99, 20, 3.99]; // math is meant for numbers so we have to work around that using spread operator
console.log(Math.min(prices)); // NaN, cant perform math.min on array
console.log(Math.min(...prices)); // 3.99, spread operator was able to unpack the numerical values from the array to process with Math.min

// * Ex Changing the original and copied array
const persons = [
    {
      name: "Jane",
      age: 28,
    },
    {
      name: "John",
      age: 35,
    },
  ];

  // Old way of copying persons:
//   const copiedPersons = persons.map((person) => ({
//     name: person.name,
//     age: person.age

//   }))

  // Using spread operator:
  const copiedPersons = [...persons];

  persons.push({name: "Anna", age: 29});
  console.log("Persons Array: ", persons); // Includes Anna object in array

  console.log("Copied Persons Array: ", copiedPersons); // Copy does not include Anna, created before anna was added.

  // * Variables within Memory
  // First assignment/ original assignment 
let x = 10; 
let y = "abc";
let z = null;

// Reassign to another variable 
let a = x;
console.log(a); // 10
let b = y;
console.log(b); // abc

// Reassign a and b
a = 5;
b = "def"; 

console.log(x, y, a, b); // 10, abc, 5, def


// ----------------------------------

let arr = [];
arr.push(1); // .push adds to the end or array / unshift could add to front? 
console.log(`arr : ${arr}`)

let reference = [1];
let refCopy = reference;
console.log(`refCopy: ${refCopy}`);

reference.push(2); // both reference & refCopy will have the 2 added
console.log(reference, refCopy); // [1,2] [1,2]

// Look up what the heck is happening with push
refCopy.push(5); 
console.log(reference, refCopy); // What I HAD expected: [1,2] [1,2,3] // What I got: [1,2,5] [1, 2, 5]

//------------------------------------------------
//? Rest Syntax
/* 
  We can use the spread operator syntax, referred to as 'rest' syntax when working with array destructuring, to package up the REST of the values in the referenced array, and return them as their own array.

- Looks exactly like spread syntax:
- Spread -> "expands" an array
- Rest -> "condenses an array"
*/

const fullNameAgain = [
  "Jane",
  "Doe",
  "Mrs.",
  {
    month: 03,
    date: 22,
    year: 1973,
  },
  2,
  "test",
  "4",
  true,
  false,
];

let janesName = fullNameAgain[0];
//console.log(janesName); // Jane

// Using both array destructuring and rest: 
let [newFirstName, newLastName,  ...otherInfo] = fullNameAgain
console.log(`newFirstName: ${newFirstName}` ) // Jane
console.log(`newLastName: ${newLastName}` ); // Doe
console.log(`otherInfor: ${otherInfo}`); // [object Object],2,test,4,true,false
console.log(`newInfo: ${otherInfo}`)


