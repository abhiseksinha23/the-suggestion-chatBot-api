const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

//Connection for the MONGODB database
//mongoose.connect("<Your db>", { useNewUrlParser: true, useUnifiedTopology: true }); 


//Creating the collections into the database

//USER COLLECTION CREATED, this is for your reference
const { userCollectionSchema } = require('./schema/usercollection');
const user = mongoose.model("user", userCollectionSchema);


//Create your Schemas here



///////////////////////////////////////////////////////////////////
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());



//Index route
app.get("/",(req,res)=>{
	res.send("it's a Dummy Collection RestFul Api");
});


//Write the routes here
//Implement the RESTFul routes responding to with status along with the data
//Or get the data and store it in your created collection in the database.
//Make a dummy collection of your own so that it can be used as an dummy datasets.







//Listening at or running at
app.listen(3000, ()=>{
	console.log("Server running at port 3000");
});