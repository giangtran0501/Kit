const logout = (req, res, next) => {
	return res.json({
		msg: "Logout success"
	});
}

module.exports = logout;