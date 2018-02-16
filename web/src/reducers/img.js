import { LOAD_IMG } from '../constants/actionTypes';

const DEFAULT_STATE = {
	url: []
}

export default (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case LOAD_IMG:
			return action.img;
		default:
			return state;
	}
}