// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require("express")
// Start up an instance of app
const app = express()
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors")
app.use(cors())

// Initialize the main project folder
app.use(express.static('website'));

app.get("/all", function(req, res) {
    return res.json(projectData);
});

app.post("/add", function(req, res) {
    let data = req.body
    console.log(data)
    projectData = data
    return res.json({messae: "success"})
});

// Setup Server
const port = 8000;

// declaring a a server variable 
const server = app.listen(port, listening);

// function to setup server
function listening(){
    console.log("server running")
    console.log(`running on localhost: ${port}`);
};

const data = []
app.get ("http://api.openweathermap.org/geo/1.0/zip?zip={zip code}&appid={24ccbcdd2340eb5eefd4e7e8a480842f}", temp)

function temp(req,res){
    data.push(req.body)
    console.log(data)
}

