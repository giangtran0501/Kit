var path = require("path");

const testImg = (req, res, next) => {
	let fileName = 'HN.jpg';
	let result = path.join(__dirname, '/../../../uploads/', fileName);
	res.sendFile(result);
}

module.exports = testImg;