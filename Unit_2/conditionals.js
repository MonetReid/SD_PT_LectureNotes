/* 
Some fun fact vocab & good to know of things:
        - JS Statement: 
            - any block of code that is performing an action, i.e. the code directions we give the program, let x = 15;
            - JS programs are all just a bunch of statements.
        - JS Expressions: 
            - a block of code that evaluates to a value, i.e. performs some sort of action that *produces a value*
            - Expressions are statements, but statements are not all expressions
    
        To ask JS to perform logic (like conditionals, functions, etc.) we will commonly use this format:
            keyword name (expression) {
                ... code block of logic
            }
*/

/* 
    ? Conditionals
    - Our way to JS a question and get an answer as a response.
    - Evaluates an expression and responds if it is true.
    - Falsy
        - false
        - 0 
        - " ", ' ' (empty strings)
        - null
        - undefined
        - NaN (not a number)
*/

/*  
    If statements: give a yes/true response if the expression is true/valid

    Structure: 
    if(expression evaluated) {
        ... code that runs only if expression is true
    }
*/

let isOn = true;

if (isOn == true) {
    console.log("The light is on!")
}
if (isOn) {
    console.log("The light is still on!")
}
isOn = false; // you cannot redeclare a variable using "let" twice, but we can reassign them like this example

if (isOn == false) {
    console.log("the light is off!")
}

/* 
    If Else Statement: gives us a no(false) response if the expression isn't true/valid. A true code block and a false code block.
*/
let weather = 65;

if(weather < 70) {
    console.log("Wear a jacket, it's chilly!");
} else {
    console.log("no jacket needed, it's nice out.");
}

let loggedInUser = true;

if(loggedInUser == true) {
    console.log("Welcome back! Here's your profile")
    } else {
        console.log("Please login or sign up to use the site!")
    }

/* 
    And &&, Or ||, Not !=: Evaluate an expression that is holding multiple checks
*/

let rain = false;
let temp = 68;

if (temp < 70 && rain) {
    console.log("Jacket please.")    // No Jacket needed
} else {
    console.log("No jacket needed.")
}

if (temp < 70 || rain) {
    console.log("Jacket please.")   // Jacket Please
} else {
    console.log("No jacket needed.")
}
rain = true;
console.log(rain);
console.log(!rain);

if (!rain) {
    console.log("Looks like a beautiful day.");
} else {
    console.log("Get your jacket!");
}

// ? Switch Statement 
 
/* 
    keywords:
        - switch
        - case
        - break
            - takes us out of our code block
        - default
            - run if no cases match
    Structure:
    switch(expression) {
        case ... :
            return;
            break;
        case ... :
            return;
            break;
        case ... :
            return;
            break;
        default:
            return;
    }
*/

let officeCharacter = "Jim";

switch (officeCharacter) {
  case "Michael":
    console.log("My mind is going a mile an hour.");
    break;
  case "Dwight":
    console.log("Perfectenschlag");
    break;
  case "Jim":
    console.log("Bears. Beets. Battlestar Galactica");
    break;
  case "Pam":
    console.log("Yup");
    break;
  default:
    console.log(`I'm sorry, ${officeCharacter}, but do I know you?`);
}

// String interpolation: using a variable in a string with backticks(`), dollar sign ($), and {}
// interpolation definition: the insertion of something of a different nature into something else.

let myName = "Kate";
let bff = "Ben";
console.log(`My name is ${myName} and my best friend is ${bff}!`);

//let num = -7;
//let num = 5;
let num = 0;

switch (true) {
    case num < 0 && num > -10:
        console.log("Case 1 ran");
        break;
    case num > 0: 
        console.log("Case 2 ran");
        break;
    default:
        console.log("Default ran, no case worked");
        break;
}


let grade = "B";
switch (true) {
    case grade == "A":
    case grade == "B":  // "A" & "B" don't have a break bc we want them to give the same action/message for either grade.
        console.log("Great job.")
        break;
    case grade == "C":
        console.log("Doing well, but maybe study a bit more.")
        break;
    case grade == "D": 
    case grade == "F": 
        console.log("Uh, I would really start studying...")
        break;
    default:
        console.log("That's not a grade value...")
}

// ? Ternary

/* 
    Always a If/Else style conditional at minimum. 
    Structure:
    expression ? true : false;
*/

let expression = false;

expression ? console.log("Runs true") : console.log(" Runs false");

let newNum = 6;

newNum > 0 ? console.log("Yes, greater than 0")  : console.log("No, less than zero");
// same as
// as an if/else
if (newNum > 0) {
    console.log("yes");
  } else {
    console.log("no");
  }

// ? Else/If

let anotherNum = 0;

if (anotherNum == 0) {
    console.log("Hello");
} else if (anotherNum > 0) {  // else if allows us to keep compounding with more options
    console.log("Hey there!");
} else {
    console.log("Goodbye");
}
//Ternary option for what's above ^
newNum == 0
  ? console.log("Hello")
  : newNum > 0
  ? console.log("hi")
  : console.log("goodbye again");

let numOne = 5;
// let numOne = -5;
let numTwo = 2;

let value = numOne + numTwo > 1 ? numOne + numTwo : 0;
console.log(value);