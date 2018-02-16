const { rootPrefix } = global;
const mongoose = require('../configs/mongoose');
const { Schema } = mongoose;

const TestSchema = Schema({
	name: String
});

const Test = mongoose.model('data', TestSchema);
module.exports = Test;
