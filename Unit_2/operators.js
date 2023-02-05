/* 
   JavaScript Operators
        - Plus          +
        - Times         *
        - Power         **
        - Dot           .
        - Assignment    =
        - Comparison    ==
                        ===
        -Division       /

    Used to:
        - Assign 
        - Compare
        - Arithmetic (Math)
        - Logical 
        - Conditionals
*/

// Equal to: ==, checks value
"3" == 3;
console.log("3" == 3); // True
console.log("4" == 3); // False

// Strict Equal to: ===, checks value and data type
console.log("Hello" === "Hello"); // True
console.log("3" === 3); // False, one is a string and one is a number, the extra = is like adding a typeof

// Not Equal & Strict Not Equal: !=, !== 
// "!" is registered as a "not" when placed in front of an operator.
console.log("2" != 2); // False
console.log("2" !== 2); // True

// Greater Than / Less Than: > <
let y = 3 > 2;
console.log("Greater Than: ", y);

let y = 5 > 3;
console.log("Greater Than", y);

// Remember, EVERYTHING to the right of the "=" is ASSIGNED to your variable on the left

// Greater Than or Equal To: >=
console.log(3 >= 2, 5 >= 10, 5 >= 5);

// Less Than or Equal To: <=
console.log(2<=2, 1<=2, 5<=2);

// And: &&
console.log(2 < 10 && 2 > 1); //True
console.log(5 < 3 && 2 > 1); // False
console.log("And:", 2 && 3); // And: 3 - by default it just chose the last number because it's not a true or false value...

// using "And:" in the console log is just a comment tag to help us see more clearly in console.

// Or: || ('shift' + \\), one must be true (username is right but password is wrong)
2 || 4;
console.log(2 || 4);
console.log(3 < 1 || 5 > 3); // True
// as long as one is right, it will be done... as soon as it finds something true (2) it will stop working and won't look at 4.

//* Logical Operators: determine the logic between variable or values.
// Ex w/ reassignment 
let a = 1; // 1
console.log(a);
a = a + 1;
console.log(a);// 2
a = a + 1; // 3
// a was redefined as 2 after a = a + 1... this is reassignment.

// Ex w/o reassignment
let g = 100;
console.log(g + 50); //150
console.log(g); // 100

g = g + 100
console.log(g); // 200 bc of reassignment


// Addition:
r += 1; // r = r + 1

let s = 50;
console.log(s += 5); // s = 50 + 5
console.log(s); // 55

// Subtraction 
r -= 1; // r = r - 1;

// Multiplication 
r*= 2; // r = r * 2;

// Division : / 
r /= 3; // r = r / 3;

// Remainder (modulus %)
r %= 1; // true/false answers 
console.log(3 % 2); // 1

// Exponential
r **= 1; // r * r "r to the power of r"
console.log(2 ** 3); // 8 "2 * 2 * 2" 