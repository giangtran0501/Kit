import adminCvt from '../utils/adminConvert';
import Storage from '../configs/Storage';

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
	.then(response => {
		if (response.error) {
			return reject(response.error);
		}
		Storage.setToken(response.token)
		.then(() => {
			resolve(adminCvt(response.admin));
		})
		.catch(error => {
			reject(error);
		});
	});
});

export default login;