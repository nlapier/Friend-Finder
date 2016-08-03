/*===========server.js==================
Your server.js file should require the basic npm packages we've used in class: express, body-parser and path.


*/
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

//Routing
var PORT = 3000;
require('./app/routing/api-routes.js')(app); 
require('./app/routing/html-routes.js')(app);

//Listener
app.listen(PORT, function(){
	console.log("listening on port " + PORT);
});

/*
Form grabber
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
Form maker
					var j;

					var questionsDiv = $("<div>").attr({
						class: "questionDiv"
					});

					var h3 = $("<h3>").html("<strong>").text("Question " + (i+1);

					var h4 = $("<h4>").text(questionsArray[i]);

					questionsDiv.append(h3);
					questionsDiv.append(h4);

					var label = $("<label>").attr({
						class: "radio-inline"
					});

					var input = $("<input>").attr({
						type:"radio",
						name:"inlineRadioOptions",
						value:"option1"
					})


					for (j = 1; j <= 5; j++){
						
					}

*/




