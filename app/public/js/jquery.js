//Form grabber
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
/*
//Form maker
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