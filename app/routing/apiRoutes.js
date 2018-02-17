var friendData = require("../data/friends");

module.exports = function(app){
	app.get("/api/friends", function(req, res){
		res.json(friendData);
	});

	app.post("/api/friends", function(req, res){
		//recieve data
		var data = req.body;
		//Create var for holding difference
		var highDif = 40;
		var currentDif = 0;
		var friend;

		//calculate friend data difference
		for(var i = 0; i < friendData.length; i++){
			currentDif = getDifference(data, friendData[i]);

			if(currentDif < highDif){
				highDif = currentDif;
				friend = friendData[i];
			}
		}

		friendData.push(data);

		res.json(friend);
	});

	function getDifference(base, friend){
		var dif = 0;

		for(var i = 0; i < 10; i++){
			dif += Math.abs(base["ans[]"][i] - friend["ans[]"][i]);
		}
		return dif;
	}
}
