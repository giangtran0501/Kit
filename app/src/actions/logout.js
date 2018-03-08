import { NavigationActions } from 'react-navigation';
import { logoutAPI } from '../api';

const { navigate, reset } = NavigationActions;

export const logout = () => dispatch => {
	logoutAPI()
	.then(() => {
		console.log('logout');
		dispatch(reset({
			index: 0,
			actions: [
				navigate({ routeName: 'Login'})
			]
		}));
	})
	.catch(error => {
		console.error(error);
	});
}