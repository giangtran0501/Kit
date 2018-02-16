import { logoutAPI } from '../api'
import { push } from 'react-router-redux';
import {setLoading} from './loading';

export const logout = () => (dispatch, getState) => {
	dispatch(setLoading(true));
	logoutAPI()
	.then(msg => {
		console.log(msg);
		console.log("redirect login");
		dispatch(push('/'));
		console.log(getState());
		dispatch(setLoading(false));
	});
}