import React, { Component } from 'react';
import { Button } from 'material-ui';
import './Login.css';
import PaperWithPadding from '../../components/PaperWithPadding';
import FormControl from '../../components/FormControl';
import TextInput from '../../components/TextInput';
import Header from '../../components/Header';
import { connect } from 'react-redux';
import { login } from '../../actions/login';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		}
		this.handleUsername = this.handleUsername.bind(this);
		this.handlePassword = this.handlePassword.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	// componentDidMount() {
	// 	if (this.props.admin.id) {
	// 		this.props.push('/user');
	// 	}
	// }

	handleUsername(e) {
		this.setState({
			username: e.target.value
		});
	}

	handlePassword(e) {
		this.setState({
			password: e.target.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.login(this.state);
	}
	render() {
		return (
			<div className="login-container">
				<div className="loginFormWrapper">
					<PaperWithPadding>
						<Header
							variant="display1"
							align="center"
						>
							Login
						</Header>
						<form onSubmit={this.handleSubmit}>
							<FormControl>
								<TextInput label="Username" 
									onChange={this.handleUsername}
									value={this.state.username}
									fullWidth={true}
								/>
							</FormControl>
							<FormControl>
								<TextInput label="Password" type="password"
									onChange={this.handlePassword}
									value={this.state.password}
									fullWidth={true}
								/>
							</FormControl>
							<FormControl align="right">
								<Button variant="raised" color="primary" type="submit">Login</Button>
							</FormControl>
						</form>
					</PaperWithPadding>
				</div>
			</div>
		)
	}
}

export default connect(state => ({
	admin: state.admin
}), {
	login,
})(Login);