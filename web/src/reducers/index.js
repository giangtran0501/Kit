import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import loading from './loading';
import img from './img';

export default combineReducers({
	router,
	loading,
	img
});
