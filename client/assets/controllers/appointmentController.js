app.controller('appointmentController', ['$scope', '$location', '$window', 'appointmentFactory', 'userFactory', function($scope, $location, $window , appointmentFactory, userFactory){
	$scope.user = {};
	$scope.appointments = [];
	$scope.messages = []
	var UserIndex = function(){
		$scope.user = userFactory.user
		if(!userFactory.user.name){
			console.log('there is no user')
			var person = $window.prompt("enter Name to sing in");
			if(person.length < 3){
				UserIndex();
			}
			userFactory.create({name: person}, function(data){
				console.log("made it to the callback")
				
				$scope.user = data;
				
			})
		}

		
	}
	UserIndex();

	var AppointmentIndex = function(){
		appointmentFactory.index(function(data){
			console.log("this is data", data);
			console.log("this is data.appointments", data.appointments);
			$scope.appointments = data.appointments
		})
	}
	AppointmentIndex()

	$scope.logout = function(){
		console.log("logout button is working")
		userFactory.logout(function(data){
			$scope.user = data
			UserIndex();

		})
	}

	$scope.create = function(){
		
		appointmentFactory.create(userFactory.user, $scope.appointment, function(data){
			console.log("This is for the new appointment", data);
			$location.url('/');
		})
	
	}

	$scope.cancel = function(){
		$scope.appointment = {}
		$location.url('/');
	}

	$scope.delete = function(id){
		appointmentFactory.delete(id, function(data){
			$location.url('/');
			AppointmentIndex();
		})
	}
}])









