//Dependencies
var express = require ("express");
var bp = require ("body-parser");
var path = require ("path");

// Sets up Express 
var app = express();

// Sets up Express data parsing
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use(bp.text());
app.use(bp.json({ type: 'application/vnd.api+json' }));

/*===========server.js==================
Your server.js file should require the basic npm packages we've used in class: express, body-parser and path.

*/
$("//form").on("submit", function(){
	var formName = $("//nameField");
	var formPhotoURL = $("//photoField");
	var formScores; // = .currentTarget??
	var friendObject = new Friend(formName, formPhotoURL, formScores);

	$.post("/api/friends", friendObject).done(function(response){
		//Display matched user onscreen using modal
		console.log("matched friend:" + response);
	});
});

//===========server.js==================\\



/*===========htmlroutes.js==================
Your html-routes.js file should include two routes:
	-A GET Route to /survey which should display the survey page.
	-A default USE route that leads to home.html which displays the home page.
*/
var PORT = 3000;

app.get("/survey", function (request, response) {
	response.sendFile(path.join(__dirname, "survey.html"));
});

app.get("/", function(request, response){
	response.sendFile(path.join(__dirname, "home.html"));
});

app.listen(PORT, function(){
	console.log("listening on port " + PORT);
});

//===========htmlroutes.js==================\\





/*===========api-routes.js==================
Your api-routes.js file should contain two routes:
	-A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
	-A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
*/


app.get("/api/friends", function(request, response){
	response.json(friendsArray)
});

app.post("/api/friends", function(request, response){
	//Add new user object
	friendsArray.push(request.body)
	//run totalDifference()
});

//===========api-routes.js==================\\



/*===========friends.js=====================

*/
function Friend(name, photoURL, scores){
	this.name = name;
	this.photoURL = photoURL;
	this.scores = scores;
	this.bestMatch;
};
//Compares the current user's answers to everybody else's answers, finding the closest match.  
Friend.prototype.totalDifference = function() {
	//lowestDiff starts at 40 because that is the maximum potential difference between two user's scores.
	var lowestDiff = 40;
	var that = this;
	friendsArray.forEach(function(currentValue, index, array){
		//Grabs every user's "scores" array in turn
		var currentFriendScores = currentValue.scores; 
		//Holds the net difference between that.scores and currentFriendScores
		var totalDiff = 0; 

		//Computes totalDiff;
		for (var i = 0; i < that.scores.length; i++) {
			var currentQuestionDiff = Math.abs(that.scores[i] - currentFriendScores[i]);
			totalDiff += currentQuestionDiff;
		};

		//If currentFriendScores is closer to this user's scores, change lowestDiff and store the Friend object currently being scanned to that.bestMath
		if (totalDiff < lowestDiff){
			lowestDiff = totalDiff;
			that.bestMatch = currentValue;
		};
	});
};

var friendsArray = [
	{
		name: "Nat1",
		photoURL: "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAdcAAAAJDE4OGM4YTA1LWE4NzYtNGM3Yi1iZTRjLTBhOGE4NDhhZWE5MA.jpg",
		scores:[
		    5,
		    1,
		    4,
		    4,
		    5,
		    1,
		    2,
		    5,
		    4,
		    1
		]
	},
];

//===========friends.js=====================\\


