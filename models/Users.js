const momgoose = reqiure('mongoose');

const userSchema = new mongoose.Schemer({
	userId: {
		type: String,
		reqiure: true,
		trim: true,
	},
	fname: {
		type: String,
		reqiure: true,
		trim: true,
	},
	lname: {
		type: String,
		reqiure: true,
		trim: true,
	},
	ward: {
		type: String,
		reqiure: true,
		trim: true,
	},
	nin: {
		type: String,
		reqiure: true,
		trim: true,
	},
	activity: {
		type: String,
		reqiure: true,
		trim: true,
	},
	role: {
		type: String,
		reqiure: true,
		trim: true,
	},
	registration_date: {
		type: Date,
		reqiure: true,
		trim: true,
	},
	birth_date: {
		type: Date,
		reqiure: true,
		trim: true,
	},
	email: {
		type: String,
		reqiure: true,
		trim: true,
	},
	residence_type: {
		type: String,
		reqiure: true,
		trim: true,
	},
	phoneNumber: {
		type: String,
		reqiure: true,
		trim: true,
	},
	gender: {
		type: String,
		reqiure: true,
		trim: true,
	},
	Single: {
		type: String,
		reqiure: true,
		trim: true,
	},
	Married: {
		type: String,
		reqiure: true,
		trim: true,
	},
	Divorced: {
		type: String,
		reqiure: true,
		trim: true,
	},
	password: {
		type: String,
		reqiure: true,
		trim: true,
	},
	confirm_password: {
		type: String,
		reqiure: true,
		trim: true,
	},
});
