const mongoose = require('mongoose');
const passportLocalMongoose = require ('passport-local-mongoose');

const userSchema = new mongoose.Schema ({
	userId: {
		type: String,
		required: true,
		trim: true,
	},
	fname: {
		type: String,
		required: true,
		trim: true,
	},
	lname: {
		type: String,
		required: true,
		trim: true,
	},
	ward: {
		type: String,
		// required: true,
		trim: true,
	},
	nin: {
		type: String,
		required: true,
		trim: true,
	},
	activity: {
		type: String,
		// required: true,
		trim: true,
	},
	role: {
		type: String,
		required: true,
		trim: true,
	},
	registration_date: {
		type: Date,
		// required: true,
		trim: true,
	},
	birth_date: {
		type: Date,
		// required: true,
		trim: true,
	},
	email: {
		type: String,
		// required: true,
		trim: true,
	},
	residence_type: {
		type: String,
		// required: true,
		trim: true,
	},
	phoneNumber: {
		type: String,
		// required: true,
		trim: true,
	},
	gender: {
		type: String,
		// required: true,
		trim: true,
	},
	Single: {
		type: String,
		// required: true,
		trim: true,
	},
	Married: {
		type: String,
		// required: true,
		trim: true,
	},
	Divorced: {
		type: String,
		// required: true,
		trim: true,
	},
	password: {
		type: String,
		required: true,
		trim: true,
	},
	confirm_password: {
		type: String,
		required: true,
		trim: true,
	},
});

userSchema.plugin(passportLocalMongoose, {
	usernameField: 'userId'
})
module.exports = mongoose.model('Registration', userSchema);