import Navigator from '../configs/Navigator';

const initialState = Navigator.router.getStateForAction(
		Navigator.router.getActionForPathAndParams('Login'));

const navReducer = (state = initialState, action) => {
	const nextState = Navigator.router.getStateForAction(action, state);
	return nextState || state;
};

export default navReducer;
