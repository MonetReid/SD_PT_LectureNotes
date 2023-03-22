// We need to call on our packaged functionality in order to use it.
// Create a variable that imports the router engine (the functionality and such that lets us build routes) from express.

const router = require('express').Router();

// Create our first read/GET route 

/* 
    -First use our router variable, then detail which type of method we want to use: CRUD methods
    - To display to the browser, we use a GET method (Read in CRUD)
    - What the Get method needs: 
        - the pathway (url/route) noted as a string
        - a callback function to handle the request and response
            - req, res
    - Browser always do a GET as default
*/

router.get("/hello-world", (req, res) => {
    res.send('Hello world');
})
//Exporting the router, gives the file/functionality to other files, makes the contents accessible in other places
module.exports = router;

/*
!   Challenge
    - Request Type: POST
    - Endpoint: "greeting"
    - Send: "Good Afternoon!"
    - Test: Postman
        * hint: GET should be POST  
*/

router.post("/greeting"), (req, res) => {
    // Add a status code for us to report any issues/status to the user
    res.status(200).send('Good Afternoon!');
}

// Goal: Write a route that will pull data from JSON
// http:/localhost:4000/practice/json
router.post('/json', (request, response) => {
    // this console will be printed in my vsc terminal thats running the server.
    console.log(request.body);

    const {name} = request.body; // destructuring
    response.status(200).send(`Hello there, ${name}`)
})

// Create a "wild card" route if things go wrong to catch any bad routing
router.get("*", (req, res) => {
    /* 
        - "*": accounts for a "wild card" or anything that hasn't been defined.
        - Provide a clean response back to the user.
    */
   res.status(404).send(`<img src="https://http.cat/404" alt="status code 404"/>`)
})
