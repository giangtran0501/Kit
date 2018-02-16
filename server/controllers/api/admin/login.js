const { test } = require('../../../repositories/admin');


const login = (req, res, next) => {
	test()
	.then(data => {
		if(!data) {
			return res.json({
				error: "Error!!!"
			})
		}
		return res.json({
			data: data
		})
	})
	.catch(err => {
		console.error(err);
	})
}

module.exports = login;