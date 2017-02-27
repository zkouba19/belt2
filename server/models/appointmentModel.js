var mongoose = require('mongoose');
var Schema = mongoose.Schema
var AppointmentSchema = new mongoose.Schema({
	date: {type: Date, required: true},
	time: {type: String, required: true},
	patient: {type: Schema.Types.ObjectId, ref: 'User'},
	complaint: {type: String, required: true, minlength: 10}
})

var Appiontment = mongoose.model('Appointment', AppointmentSchema);