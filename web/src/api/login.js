const login = (username, password) => new Promise((resolve, reject) => {
	const url = '/api/admin/login';
	fetch(url, {
		method: 'POST',
		headers: new Headers({
			'Content-Type': 'application/json'
		}),
		body: JSON.stringify({ username, password })
	})
	.then(response => response.json())
	// .then(response => {
	// 	if (response.error) {
	// 		return reject(response.error);
	// 	}
	// 	Storage.setToken(response.token)
	// 	.then(() => {
	// 		resolve(adminCvt(response.admin));
	// 	})
	// 	.catch(error => {
	// 		reject(error);
	// 	});
	// })
	.then(response => {
		if (response.error) {
			return reject(response.error);
		}
		return resolve(response.data);
	})
	.catch(reject);
	
	// .then(response => {
	// 	console.log(response.msg);
	// 	resolve(response.msg);
	// })
	// .catch(reject);
});

export default login;