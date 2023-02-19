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