app.factory('appointmentFactory', ['$http', function($http){
	var factory = {};
	factory.user = {};
	factory.appointments = [];
	factory.index = function(callback){
		$http.get('/appointments').then(function(returned_data){
			console.log(returned_data);
			if(typeof(callback) == 'function'){
      			callback(returned_data.data);
      		}
		})
	}
	factory.create = function(user, appointment, callback){
		var data = {user, appointment};
		console.log("QWERTYU", data);
		$http.post('/appointments', data).then(function(returned_data){
			console.log(returned_data);
			if(typeof(callback) == 'function'){
      			callback(returned_data.data);
      		}
		})
	}

	factory.delete = function(id, callback){
		$http.delete('/appointments/'+id).then(function(returned_data){
			if(typeof(callback) == 'function'){
      			callback(returned_data.data);
      		}
		})
	}

	return factory
}])