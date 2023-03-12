/* 
? API
- Application Programming Interface
- Wonderful way to access data we are trying to obtain
    - Data that is not in our local project. 
    - Ex: data stored in a database, cloud storage, or someone else's public database(via a public API)
    Allows the Client (front end of the application, web page, program) to communicate with the/a server(database)
    Allows HTTP requests and response lifecycle.
*/

/* 
    ? AJAX
    - Asynchronous JavaScript and XML
    - Might see if working with older code bases
    - Wrap XML with XMLHttpRequests -> not important to know right now
    - Governs different aspects of our page, such as static vs dynamic section of our page.
    Pros:
        - Page components loaded individually
        - New data updated regularly
    Cons:
        - JS must be enabled
        - Adds more complex aspects.
        - refreshes the page state and stores info can bloat.
        - Difficulty for screen readers.
    - Works through multiple technologies
        - HTML / CSS
        - DOM (Document Object Model)
        - JSON
        - Fetch
        - JS bringing it all together
    - Not Promised based.
    *jQuery
        - AJAX often works with it
        - A library that helps us handle the front end.
        - Prior to DOM and Fetch
        - still used but dated
    example:
        - timed updates to comments (replies)
        - infinite scrolling
        - dynamic search results

https://developer.mozilla.org/en-US/docs/Web/API/fetch
https://www.w3schools.com/jsref/api_fetch.asp
*/

const log = console.log; // Us creating a shortcut variable to hold our console log functionality. 

//log("kate");

// Store API URL in a global variable
//Endpoint/ Route are like the web address URL, interchangeable words
const testEndpoint = "https://dog.ceo/api/breeds/image/random";

// log(testEndpoint);
//log(fetch(testEndpoint)); // Shows that fetch returns a promise, promise showed we got a success of 200

// Write a fetch: use the fetch global method & pass the url variable 
fetch(testEndpoint)
    .then((response)=> {
        log("1st fetch .then",response)// returning the response for the nex .then
        return response;
        
    })

    .then((res) => {
        log("2nd fetch .then",res.json) // json-ifying our response into something until we can use  and returning it
        res.json()
    })

    .then((data) => {
        log("3rd fetch .then", data); // logging the json object (now we can use it!)
        seeDogPic(data);
    });

    /* 
    ? JSON (what we used above^)
    - JavaScript Object Notation
        - very lightweight way to store and transfer data
        - "Easy to understand/read" (for us humans)
        - Structured like an object

        Syntax & Structure:

        {
            "key": "values",
            "key": "values",
            "key": 0
        }

        - Everything is wrapped in quotes with minor exceptions (integers / booleans)
        - Data is all separated with commas
        - CANNOT hold comments or functions (more for packaging)

        - .json() method helps to convert our promise response into something usable (object)
    */

    // How can we see the dog pic from the fetch though??
    // Build a function where we create dom elements, assign them values and append them to the parent element/html
    let body = document.querySelector("body");

    function seeDogPic(jsonDataFromFetch) {
        log(jsonDataFromFetch);

        //Create elements
        let img = document.createElement("img");

        // Assign img attributes
        img.src = jsonDataFromFetch.message;

        // Append
        body.appendChild(img);
    }

    // * JSON.parse(string)
    let myText = '{ "name": "Gollum", "lost_ring", true }';
    log(myText);
    log(JSON.parse(myText));
    let testObj = JSON.parse(myText);
    log(testObj.name);
    testObj.name = "Bilbo";
    log(testObj);

    /* 
The Process:
        1. Fetch your resource which returns a promise
        2. Use a .then() resolver to catch fetches return and assign to a parameter.
        3. use .json() on response to finish reading entire ReadableStream.
        4. Chained another .then() to catch read response object and ..
        5. Build the rest as needed.
            - DOM manipulation
            - use data to process in other functions
            - whatever your project requires.
    Fetch differs from jQuery:
        - The promise returned won't reject on HTTP error status even even if its a 404 or 500 (internal / external server error)
*/

// See another fetch example or two...

const url = "https://meowfacts.herokuapp.com/";

// An example of a fetch in a function

function getCatFact() {
    fetch(url)
        .then((r) => r.json())
        .then((d) => log(d))
}

//getCatFact();

// Async/Await Fetch
const getCatFact2 = async () => {
    let res = await fetch(url);
    let result = await res.json();
    let data = result.data[0];
    log('In Async/Await:', data); 

}

getCatFact2(); // Prints fact to the console

/* 
? Local fetch to json file 
    - Project has the data we want to fetch from 
*/

function fetchFellowship() {
    fetch("./local.json") // passing our file location
    .then(res => res.json())
    .then(data => {
        let members = data.fellowship;
        //log(members);
        // Used a for/of loop to cycle through the array.
        for(m of members) {
            log(m); // logs each member object
            log(m.name);
        }
    })
}

fetchFellowship();

// * Error Handling with try/catch 

// Async/Await
async function getCatFact3() {
    try {
        //let response = fetch(url); //break
        let response = await fetch(url);
        let results = await response.json();
        let data = results.data[0];
        log("Try block of try/catch:", data);
    } catch(err) { 
        console.error(err);
    }
}
getCatFact3();

//* Error Handling with resolvers (.catch())

fetch(url) 
    .then(r => r.json() )
    .then(d => log("Fetch Resolver:", d.data[0]))
    .catch(err => console.error(err));