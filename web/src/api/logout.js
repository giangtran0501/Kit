// import Storage from '../configs/Storage';

const logout = () => new Promise((resolve, reject) => {
	const url = `/api/admin/logout`;
	// Storage.getToken()
	fetch(url, {
		method: 'GET',
		headers: new Headers({
			'Content-Type': 'application/json'
		})
	})
	.then(response => response.json())
	.then(response => {
		// Storage.removeToken();
		if (response.error) {
			return reject(response.error);
		}
		return resolve(response.msg);
	})
	.catch(reject);
});

export default logout;