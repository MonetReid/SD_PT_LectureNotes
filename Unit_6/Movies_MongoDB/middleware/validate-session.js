// Build our middleware function
const validateSession = async (req, res, next) => {
// Middleware still has access to the request, response, and requires the next() function to move past it.
   
//* remember the timeLog() helper within the ToDo_List

    //1. Take token provided by request object (headers.authorization)

    //2. Check the status of token. (expired?)

    //3. Provide response - if valid, generate a variable that holds user info.

    //! Just to make sure it works--- 
    const token = req.headers.authorization;
    console.log(token);

    return next(); // moves us onto our routes/endpoint

}


// Export the function
module.exports = validateSession;