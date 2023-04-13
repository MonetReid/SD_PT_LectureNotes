// Require in mongoose
const mongoose = require("mongoose");

/* 
    Models are a structure to how we want our objects within our database to look.
        - This is our schema! 
        - Are referenced whenever we are handling data between the client-side and database.
*/

const UserSchema = new mongoose.Schema({

    /* 
    Below creates columns for our documents: 
        - columns would be the key/value pairs of our objects that we wish to store.
        - We establish the key and then what ype of data it is expected to store.
    */
    // columns for our document
    firstName: {
        type: String, // what datatype this is expecting.
        // Using capital is a constructor thing and apart of schema 
        required: true, // default is false.
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true, 
        unique: true, // duplicate emails will through an error response
    },
    password: {
        type: String,
        required: true,


    }
})

/* 
    Although we won't see this until we establish a connection route, Databases typically add a plural suffix to our schemas. 
    - User = Users from our export
*/

// Need to export the model
module.exports = mongoose.model("User", UserSchema);