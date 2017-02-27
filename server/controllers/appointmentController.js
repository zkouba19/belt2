var mongoose = require('mongoose');
var Appointment = mongoose.model('Appointment');
module.exports = {
	index: function(req, res){
		Appointment.find({}).populate('patient').exec(function(err, appointments){
			if(err){
				console.log('could not find appointments');
			} else {
				console.log("found appointments");
				res.json({appointments})
			}
		})
	}, 

	create: function(req, res){
		var user = req.body.user
		console.log("!@#@#$%^&*", user)
		var appointmentData = req.body.appointment
		var newAppointment = new Appointment({date: appointmentData.date, time: appointmentData.time, patient: user._id, complaint: appointmentData.complaint})
		newAppointment.save(function(err){
			if(err){
				console.log('unable to create appointment');
				console.log(err);
			} else {
				console.log('successfully create appointment');
				console.log(newAppointment);
				res.json({newAppointment});
			}
		})
	}, 
	delete: function(req, res){
		var id = req.params.id
		Appointment.remove({_id: id}, function(err){
			if(err){
				console.log('Unable to delete appointment');
			} else {
				console.log('Able to delete appointment');
				res.json({message: "able to delete appointment"})
			}
		})
	}
}