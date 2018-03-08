const { rootPrefix } = global;
const mongoose = require(`${rootPrefix}/configs/mongoose`);
const { Schema } = mongoose;

const UserSchema = Schema({
	username: {
		type: String,
		require: true,
		unique: true
	},
	fullname: {
		type: String,
		require: true
	},
	password: {
		type: String,
		require: true
	},
	email: {	
		type: String,
		require: true,
		unique: true
	},
	gender: {
		type: String,
		require: true,
	},
	avatar: String,
	isLock: {
		type: Boolean,
		require: true,
	},
	fbId: String,
	reports: [String],
	reported: [String],
	following_users: [String],
	followers: [String],
	following_trips: [String],
	trips_invited: [String],
	plans_invited: [String]
});

UserSchema.index({
	fullname: 'text',
	username: 'text'
});

const User = mongoose.model('user', UserSchema);
module.exports = User;