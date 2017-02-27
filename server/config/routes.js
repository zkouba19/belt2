var UserController = require('./../controllers/userController.js');
var AppointmentController = require('./../controllers/appointmentController.js');

module.exports = function(app){
	app.get('/users', function(req, res){
		UserController.index(req, res);
	});
	app.post('/users', function(req, res){
		UserController.create(req, res);
	});
	app.get('/appointments', function(req, res){
		AppointmentController.index(req, res);
	});
	app.post('/appointments', function(req, res){
		AppointmentController.create(req, res);
	});
	app.delete('/appointments/:id', function(req, res){
		AppointmentController.delete(req, res);
	});
	
}