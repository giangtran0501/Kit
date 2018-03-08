import React from 'react';
import store from './src/configs/store';
import { Provider } from 'react-redux';
import Navigator from './src/configs/Navigator';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
// import { getUser } from './src/actions/login';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	// componentDidMount() {
	// 	this.props.getUser();
	// }

	render() {
		return (
			<Navigator 
				navigation={addNavigationHelpers({
					dispatch: this.props.dispatch,
					state: this.props.nav,
				})}
			/>
		);
	}
}

const AppWithNavigationState = connect(state => ({
	nav: state.nav
}), dispatch => ({
	dispatch
	// getUser
}))(App);

export default () => (
	<Provider store={store}>
		<AppWithNavigationState />
	</Provider>
);
