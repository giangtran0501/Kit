import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import history from '../configs/history';
import { connect } from 'react-redux';
import Hi from '../components/Hi';
import Login from '../containers/Login';
import Dash from '../containers/Dash';
import { MuiThemeProvider } from 'material-ui/styles';
import { demoAction } from '../actions/demoAction';
import theme from '../configs/theme';
import Loading from './Loading';
import Message from './Message';
import { getAdmin } from '../actions/login';

const Application = ({text}) => (
	<div>
		<Message />
		<Loading />
		<Switch>
			<Route exact path="/login" component={Login} />
			<Route path="*" component={Dash} />
		</Switch>
	</div>
);

class App extends Component {
	constructor() {
		super();
		this.state = {
			text: ''
		}
	}

	componentDidMount() {
		// console.log('App mounted');
		// this.props.demoAction()
		// .then(data => this.setState({
		// 	text: data.msg
		// }));
		this.props.getAdmin();
	}

	render() {
		return (
			<ConnectedRouter history={history}>
				<MuiThemeProvider theme={theme}>
					<Application text={this.state.text}/>
				</MuiThemeProvider>
			</ConnectedRouter>
		)
	}
}

export default connect(state => ({}), {
	demoAction,
	getAdmin
})(App);
