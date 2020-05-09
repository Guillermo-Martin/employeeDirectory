// EXPRESS CONFIGURATION
// =============================================
// Require Express
const express = require("express");

// Set up the Express app
const app = express();
const PORT = 3005;

// Include body parser for data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// =============================================




// ROUTES
// =============================================
// Homepage route
app.get("/", function(req, res) {
  res.send("You've reached the homepage!");
});

// =============================================





// Listener
// =============================================
app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
});
