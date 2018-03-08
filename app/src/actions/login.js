import { SET_USER } from '../constants/actionTypes';
import { NavigationActions } from 'react-navigation';
import {
	loginAPI,
	getUserAPI
} from '../api';
import alert from '../utils/alert';

const { navigate, reset } = NavigationActions;

const setUserAction = user => ({
	type: SET_USER,
	user
});

export const login = ({username, password}) => dispatch => {
	loginAPI(username, password)
	.then(user => {
		dispatch(setUserAction(user));
		dispatch(reset({
			index: 0,
			actions: [
				navigate({ routeName: 'Home' })
			]
		}));
	})
	.catch(error => {
		alert('Đăng nhập thất bại. Username hoặc mật khẩu không chính xác.');
		console.log(error);
	})
}

export const getUser = () => dispatch => {
	console.log('autoLogin');
	getUserAPI()
	.then(user => {
		if (user) {
			dispatch(setUserAction(user));
			dispatch(reset({
				index: 0,
				actions: [
					navigate({ routeName: 'Home' })
				]
			}));
		} else {
			console.log('Not login');
		}
	})
	.catch(error => {
		console.log(error);
	});
}