import urlParser from '../utils/url';
import Storage from '../configs/Storage';

const login = (username, password) => new Promise((resolve, reject) => {
	console.log('login user API');
	const url = urlParser('/api/user/login');
	console.log('url', url);
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
			console.log(response.user);
			resolve(response.user);
		})
		.catch(error => {
			reject(error);
		})
	})
	.catch(error => {
		reject(error);
	});
});

export default login;