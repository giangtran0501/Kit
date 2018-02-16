import { setLoading } from './loading';
import { testImgAPI } from '../api';
import { LOAD_IMG } from '../constants/actionTypes';

const loadImg = img => ({
	type: LOAD_IMG,
	img
});

export const testImg = (id) => dispatch => {
	dispatch(setLoading(true));
	testImgAPI(id)
	.then(data => {
		console.log(data.url);
		dispatch(loadImg(data));
		dispatch(setLoading(false));
	})
}