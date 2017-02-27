app.factory('userFactory', ['$http', function($http){
	var factory = {};
	factory.user = {};
	factory.index = function(callback){
		callback(factory.user);
	}

	factory.create = function(user, callback){
		
		$http.post('/users', user).then(function(returned_data){
			console.log("this is the user in the user factory", returned_data.data);
			factory.user = returned_data.data.newUser;
			if(typeof(callback) == 'function'){
      			callback(returned_data.data);
      		}
		})
	}
	factory.logout = function(callback){
		factory.user = {};
		console.log("We deleted the user in the userfactory", factory.user);
		if(typeof(callback) == 'function'){
      			callback(factory.user);
      	}
	}
	return factory
}]);