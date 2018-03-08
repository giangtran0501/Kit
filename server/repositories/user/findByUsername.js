const User = require(`${rootPrefix}/models/User`);

const findByUsername = username => new Promise((resolve, reject) => {
	User.findOne({ username })
	.exec((err, user) => {
		if (err) {
			return reject(err);
		}
		return resolve(user);
	});
});

module.exports = findByUsername;