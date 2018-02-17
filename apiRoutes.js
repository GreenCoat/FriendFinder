var express = require('express');
var router = express.Router();

router.get("/api/friends", function(req, res){
	res.json(friendData);
});

router.post("/api/friends", function(req, res){
	//recieve data
	var data = req.body;
	//Create var for holding difference
	var highDif = 0;
	var currentDif = 0;
	var friend;

	//Push data to friends list
	friendData.push(data);

	//calculate friend data difference
	for(var i = 0; i < friendData.length; i++){
		currentDif = getDifference(data, friendData[0]);

		if(currentDif > highDif){
			highDif = currentDif;
			friend = friendData[0];
		}
	}

	res.json(friend);
});

function getDifference(base, friend){
	var dif = 0;

	for(var i = 0; i < 10; i++){
		dif += Math.abs(base.questions[i] - friend.questions[i]);
	}

	return dif;
}

module.exports = router;