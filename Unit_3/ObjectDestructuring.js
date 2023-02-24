/* 
? Object Destructuring
- Allows us to unpack values from an object into distinct variables
- similar syntax as object literals, but the curly braces {} are on the left side of the assignment operator (=)


*/

let theSimpsons = {
    id: 1,
    est: 1989,
    genre: "animated",
    seasons: {
      "season one": [
        {
          episode_title: "Simpson Roasting on an Open Fire",
          aired: "1989-12-17",
        },
        {
          episode_title: "Bart the Genius",
          aired: "1990-01-01",
        },
        ["1989-12-17", "1990-01-14"],
      ],
      "season two": [
        /* .... */
      ],
      "season three": [
        /* .... */
      ],
    },
    currently_running: true,
  };
  theSimpsons.characters = ["Homer", "Marge", "Bart", "Lisa", "Maggie"];

  // Examples of destructuring: keys are the variables name to destructure 
  const { characters, seasons } = theSimpsons;
  console.log("Destructuring Characters", characters) // we just separated out characters into it's own variable so we don't need to dig for it every time.

  console.log("Destructuring Seasons", seasons);

  characters.push("Meo"); // typo
  characters[5] = "Moe"
  console.log(characters);
  console.log(characters[characters.length -1]); // Moe
  
  // Can rename the key variables via a colon
  const { est: established, currently_running: on_air } = theSimpsons
  console.log(established);
  console.log(on_air);

  console.log("Doesn't change original keys: ", Object.keys(theSimpsons));


// ? Spread Operator with Objects

// ...
//! No (;) in an Object only (,)
const simpsonsCharacters = { 
    simpsonsHouse: [ "Homer", "Marge", "Bart", "Lisa", "Maggie"], 
    moesTavern: ["Moe", "Barney"]
}
const generalLocations = {
    park: "statue",
    beach: "dock",
    lake: "3-eyed fish"
}
const locations = {
    ...simpsonsCharacters,
    dmv: ["Patty", "Selma"],
    ... generalLocations
}

locations.beach = ["dock", "fisherman"];
console.log(locations);
console.log(generalLocations);

// Use spread operator to combine multiple objects into one