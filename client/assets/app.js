var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'partials/dashboard.html',
		controller: 'appointmentController'
	})
	.when('/new_appointment', {
		templateUrl: 'partials/appointment.html',
		controller: 'appointmentController'
	})
	.otherwise({
		redirectTo: '/'
	})
})