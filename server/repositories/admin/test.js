const Test = require('../../models/Test');

const test = () => new Promise((resolve, reject) => {
	Test.find()
	.exec((err, datas) => {
		if (err) {
			return reject(err);
		}
		console.log(datas[0].name);
		return resolve(datas);
	});
});

module.exports = test;