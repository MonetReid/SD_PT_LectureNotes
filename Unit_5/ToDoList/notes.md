# Getting Started
- create a `package.json` 
  - In terminal: cli command: `npm init -y`
- Install our dependencies
  - express: `npm i express`
- Create a `.gitignore` file
  - `/node_modules` within .gitignore
    - tells our local repository to ignore the `node_modules` folder when backing up.
   - node_modules folder
  - Provides us access to any "behind the scenes" code that helps run express and any dependencies. 
  - If anything gets deleted or you're cloning down a project, use `npm install` to get those files back/installed.
  - package-lock.json
  - locks project into required dependencies. Helps with our versioning
  - updated our `package.json` with `"main": "app.js"` instead of `index.js`.
  
  - Create a root JS file
  - `app.js` or `index.js`

  - Use the command `nodemon` to start the server
    -nodemon is a way for our server to continuing to run while we are building/ making changes. 
    - to stop the server ctrl+c

## Controllers
Our controllers help us set routes for various endpoints. Depending on how we build the path will determine how it responds

CRUD (Create, Read, Update, Delete)
- Create: POST
- Read: GET
- Update: PUT/ PATCH
- Delete: DELETE

We are going to set up a controller folder and make our first controller called practice.controller.js.

sending a status code with a response is a good practice for both the user and developer.

## Postman
- Set Methods
  - GET / POST / PUT / DELETE depending on route
  - Body
    - raw
    - JSON
    - Make a JSON object

## Preparing our server to handle JSON objects
In our `app.js` we need to have this line of code:
```js
app.use(express.json());
```
This provides us access JSON files throughout our routes.


## MVC
- Stands for Model View Controller
- Architecture pattern that helps our Separation of Concerns
- View: browser, Postman, etc.
  - Application that interface with the server.
- Controller: Part of the server application which handles logic.(How we build our logic within the server, we code and create what routes can be used and what they do.)
- Model: Database schematic.
