//path package for getting correct file path for html
var path = require("path");

//routes for html
module.exports = function(app) {
	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/survey.html"));
	});//req func end

	// If no matching route is found default to home
	  app.use(function(req, res) {
	    res.sendFile(path.join(__dirname, "/../public/home.html"));
	  });
}//app function end