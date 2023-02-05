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