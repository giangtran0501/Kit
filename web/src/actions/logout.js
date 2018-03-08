import { logoutAPI } from '../api'
import { push } from 'react-router-redux';
import {setLoading} from './loading';
import { RESET_ADMIN } from '../constants/actionTypes';
import { showMessage } from './message';

export const resetAdminAction = () => ({
	type: RESET_ADMIN
});

export const logout = () => (dispatch) => {
	dispatch(setLoading(true));
	logoutAPI()
	.then(() => {
		dispatch(resetAdminAction());
		dispatch(push('/login'));
		dispatch(setLoading(false));
	})
	.catch(err => {
		dispatch(setLoading(false));
		dispatch(showMessage("Có lỗi xảy ra!!!"));
		console.log(err);
	})
}