import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import admin from './admin';
import loading from './loading';
import message from './message';
import img from './img';

export default combineReducers({
	router,
	admin,
	loading,
	message,
	img
});
