const { rootPrefix } = global;
// const mongoose = require('../configs/mongoose');
const mongoose = require(`${rootPrefix}/configs/mongoose`);
const { Schema } = mongoose;

const AdminSchema = Schema({
	username: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	level: {
		type: String,
		required: true
	},
	isLock: {
		type: Boolean,
		required: true 
	}
});

const Admin = mongoose.model('admin', AdminSchema);
module.exports = Admin;