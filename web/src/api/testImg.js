
const testImg = (id) => new Promise((resolve, reject) => {
	const url = `/api/admin/testImg?id=${id}`;
	fetch(url, {
		method: 'GET',
		headers: new Headers({
			'Content-Type': 'application/json'
		})
	})
	// .then(response => response.json())
	.then(response => {
		if (response.error) {
			return reject(response.error);
		}
		console.log("response imgTest", response);
		return resolve(response);
	})
	.catch(reject);
});

export default testImg;