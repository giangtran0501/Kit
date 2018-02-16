import { loginAPI } from '../api'
import { push } from 'react-router-redux';
import { setLoading } from './loading';

export const login = ({ username, password }) => (dispatch, getState) => {
	dispatch(setLoading(true));
	loginAPI(username, password)
	.then(data => {
		console.log("redirect home");
		console.log(data[0]);
		dispatch(push('/home'));
		console.log(getState());
		dispatch(setLoading(false));
	});
}