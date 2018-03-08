const { rootPrefix } = global;
const { findByUsername } = require(`${rootPrefix}/repositories/user`);
const { createSessionToken } = require(`${rootPrefix}/repositories/loginToken`);
const compare = require(`${rootPrefix}/utils/compare`);
const pickUser = require(`${rootPrefix}/utils/pickUser`);

const login = (req, res) => {
	console.log('user login');
	const { username, password } = req.body;
	findByUsername(username)
	.then(user => {
		if (!user) {
			return res.json({
				error: 'User not found!!!'
			})
		}
		compare(password, user.password)
		.then(result => {
			if (!result) {
				return res.json({
					error: 'Incorrect password'
				})
			}
			createSessionToken(user._id)
			.then(loginToken => {
				return res.json({
					user: pickUser(user),
					token: loginToken.token
				})
			})
			.catch(err => {
				console.error(err);
			})
		})
		.catch(err => {
			console.error(err);
		})
	})
	.catch(err => {
		console.error(err);
	})
}

module.exports = login;