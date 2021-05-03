# Static Node.js and Express Site - Project 6 treehouse

## Layout, CSS and styles

-   Added logo of my company Tjernstad Utvikling
-   changed background colors
    -   Body
    -   Sidebar
    -   Header / Footer on sub pages
-   Adjusted text color where colors where to close to the background color after changes
-   Round profile picture
-   Changed font-family to 'Original Surfer', cursive;

## Project steps

-   [x] Create an images folder and images
    -   Add a profile pic of yourself that you would feel comfortable sharing with potential employers. It should present well at 550px by 350px.
    -   Take screenshots of your projects. You will need at least two screenshots for each project
-   [x] Create a data.json file at the root of your directory with 5 projects
-   [x] Setup your server, routes and middleware

    -   Create an app.js file at the root of your directory.
    -   Add variables to require the necessary dependencies. You'll need to require:
    -   Set up your middleware:
    -   set your “view engine” to “pug”
    -   use a static route and the express.static method to serve the static files located in the public folder
    -   Set your routes. You'll need:

    -   Finally, start your server. Your app should listen on port 3000, and log a string to the console that says which port the app is listening to

-   [x] Handle errors
    -   If a user navigates to a non-existent or undefined route, such as /noroute or /project/noroute, or if a request for a resource fails for whatever reason, your app should handle the problem in a user friendly way.
    -   After the 404 handler in app.js add a global error handler that will deal with any server errors the app encounters. This handler should ensure that there is an err.status property and an err.message property if they don't already exist, and then log out the err object's message and status.
-   [x] Complete your Pug files
    -   Go through each of the four Pug templates to inject your data. The Pug files contain comments that detail each change you will need to make. You can and should delete these comments when you are finished with this step.
-   [x] Layout, CSS and styles
    -   The layout of the finished project should match the provided mockups.
    -   To really make this project your own, you should customize the CSS following the suggestions in the Extra Credit section at the bottom of this page.

### additional steps

-   [x] Customize the package.json file
    -   Set up your package.json file so that running npm start will run the app.
