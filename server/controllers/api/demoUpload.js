module.exports = (req, res, next) => {
	console.log(req.file);
	res.send("OK");
}
