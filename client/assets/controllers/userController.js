app.controller('userController', ['$scope', '$location', '$window', 'userFactory', function($scope, $location, $window, userFactory){
	$scope.user = {};
	var index = function(){
		$scope.user = userFactory.user
		if(!$scope.user.name){
			console.log('there is no user')
			var person = $window.prompt("enter Name to sing in");
			console.log('%%***%%%%', $scope.user);
			userFactory.create({name: person}, function(data){
				console.log("made it to the callback")
				console.log(data);
				$scope.user = data;
				console.log('!@#$%^&*()_', $scope.user)
			})
		}

		
	}
	index();

	$scope.logout = function(){
		userFactory.logout(function(data){
			$scope.user = data
			$location.url('/');
			console.log("@@@@@@@@@@@@", $scope.user)
			index();

		})
	}
}]);