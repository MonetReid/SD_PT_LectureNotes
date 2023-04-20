/* 
  Challenge
    - Create a Schema called MovieSchema
    - Properties within:
        "title": string, required
        "genre": string
        "rating": string, required
        "length": number, required
        "releaseYear": number
        
    Note:
        Consider how the User model was created.
*/
const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema ({
    title: {
        type: String,
        required: true,
    } ,
    genre: {
        type: String,
        required: false

    },
    rating: {
        type: String,
        required: true
    } ,
    length: {
        type: Number,
        required: true
    },
    releaseYear: {
        type: Number,
        required: false
    },
})

module.exports = mongoose.model("Movies", MovieSchema);