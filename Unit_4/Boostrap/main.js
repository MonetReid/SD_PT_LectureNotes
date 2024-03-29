/* 
 ToDO:
    + Make needed global variables
    + Build Fetch to test the API endpoint
    - Make an array variable to hold recipes 
    - Connect to the DOM of the html (button in nav, divs for the cards)
    - Build a function to display random recipe card
    - Build a function to display the deck of recipes 
*/

// Global Variables
const url = "https://api.spoonacular.com/recipes/random";
const apiKey = "91829de00cb04310813582b0bfacb6a3";
let buildURL = `${url}/?apiKey=${apiKey}`;
// DOM Elements
const searchForm = document.querySelector("#search-form");

// Build function for Displaying Random Recipe single card
const displayRandomCard = (recipe) => {
  // console.log(recipe);
  // make variable for parent container
  const randomCard = document.querySelector(".random-card");

  // Will replace cards versus letting them stack
  while (randomCard.firstChild) {
    randomCard.removeChild(randomCard.firstChild);
  }

  //* Create Elements
  let card = document.createElement("div");
  let img = document.createElement("img");
  let body = document.createElement("div");
  let title = document.createElement("h5");
  let btn = document.createElement("a");

  //* Set Attributes
  // Need to use BS class names to build elements
  card.className = "card";
  card.style.width = "18rem";
  img.src = recipe.img; // using our obj to place the value.
  img.className = "card-img-top";
  img.alt = recipe.title;
  body.className = "card-body";
  title.className = "card-title";
  title.textContent = recipe.title;
  btn.className = "btn btn-success";
  btn.textContent = "Add Recipe";

  //* Attach Elements
  body.appendChild(title);
  body.appendChild(btn);

  card.appendChild(img);
  card.appendChild(body);

  randomCard.appendChild(card);
};
// Build function for our saved recipes

// EVENT LISTENER
searchForm.addEventListener("submit", (e) => {
  e.preventDefault(); // stops our page from refreshing due to default properties of our form

  // Fetch()
  fetch(buildURL)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      let recipe = data.recipes[0]; // pathway to target the individual recipe object

      let obj = {
        title: recipe.title,
        img: recipe.image,
        src: recipe.sourceUrl,
      };

      displayRandomCard(obj); // Pass our new object as an argument to the display func
    })
    .catch((err) => console.error(err));
});