var mongoose = require('mongoose');
var User = mongoose.model('User');
module.exports = {
	index: function(req, res){
		User.find({}, function(err, users){
			if(err){
				console.log("could not find users");
			} else {
				console.log("Found users");
				res.json({users});
			}
		})
	},
	create: function(req, res){
		var data = req.body;
		console.log("$$$$$$$$$$$$$$$$$$$$$", data.name)
		var newUser = new User({name: data.name})
		newUser.save(function(err){
			if(err){
				console.log(err);
				console.log('could not create user');
			} else {
				res.json({newUser})
			}
		})
	}
}