//linking route to friends data source that hold all of
//the data for all potential friends

var friendsData = require("../data/friends");

//setting up routes
module.exports = function(app) {
	app.get("/api/friends", function(req, res) {
    	res.json(friendsData);
  	});

	 app.post("/api/friends", function(req, res) {
	 	friendsData.push(req.body);
	 	console.log(friendsData);
	 });
};//app function end