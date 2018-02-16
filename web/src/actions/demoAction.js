export const demoAction =  () => dispatch => {
	return fetch('/api', {
		credentials: 'same-origin'
	})
	.then(response => response.json())
	.then(response => {
		console.log(response);
		return response;
	});
}
