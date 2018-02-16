import React, { Component } from 'react';
import './Dash.css';
import Home from '../Home';
import { Route, Switch, Redirect } from 'react-router-dom';

class Dash extends Component {
	render() {
		return (
			<div>
				<Switch>
					<Route exact path="/" component={() => <Redirect to="/login" />} />
					<Route exact path="/*" component={Home} />
				</Switch>
			</div>
		);
	}
}

export default Dash;
