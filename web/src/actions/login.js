import { loginAPI, getAdminAPI } from '../api'
import { push } from 'react-router-redux';
import { setLoading } from './loading';
import { showMessage } from './message';
import { SET_ADMIN } from '../constants/actionTypes';

const setAdminAction = admin => ({  //ACTION CREATER
	type: SET_ADMIN,
	admin
});

export const login = ({ username, password }) => (dispatch, getState) => {
	dispatch(setLoading(true));
	loginAPI(username, password)
	.then(admin => {
		// console.log("redirect home");
		// console.log(admin);
		dispatch(setAdminAction(admin));
		dispatch(push('/home'));
		dispatch(setLoading(false));
	})
	.catch(error => {
		dispatch(setLoading(false));
		dispatch(showMessage('Mật khẩu hoặc tên đăng nhập không chính xác.'));
		console.log(error);
	});
}

export const getAdmin = () => (dispatch, getState) => {
	const { pathname } = getState().router.location;
	dispatch((setLoading(true)));
	getAdminAPI()
	.then(admin => {
		dispatch(setLoading(false));
		if (admin) {
			dispatch(setAdminAction(admin));
			dispatch(push('/home'));
		} else {
			if (pathname !== '/login') {
				dispatch(showMessage('Bạn đã đăng xuất!!!'));
				dispatch(push('/login'));
			}
		}
	})
	.catch(error => {
		dispatch(setLoading(false));
		dispatch(showMessage('Cannot authenticate'));
		console.log(error);
	});
}