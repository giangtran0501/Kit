require('dotenv').load();
const server = require('../configs/server');

const port = process.env.PORT || 8080;
server.listen(port, () => {
	console.log(`[S] Server is listening on port ${port}`);
});
