import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity,
		Image, Dimensions, alert } from 'react-native';
import { connect } from 'react-redux';
import Container from '../components/Container';
import Wallpaper from '../components/Wallpaper';
import FormContent from '../components/FormContent';
import Input from '../components/Input';
import Hr from 'react-native-hr-component';
import { login, getUser } from '../actions/login';

const style = StyleSheet.create({
	titleWrapper: {
		alignItems: 'center',
		marginTop: 70,
	},
	image: {
		width: 188,
	},
	textStyles: {
	}
});

class Login extends Component {
	static navigationOptions() {
		return {
			title: 'Login',
			header: null
		}
	}

	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		}
		this.handleUsernameChange = this.handleUsernameChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handleLoginClick = this.handleLoginClick.bind(this);
		this.handleFacebookLoginClick = this.handleFacebookLoginClick.bind(this);
	}

	handleUsernameChange(username) {
		this.setState({ username });
	}

	handlePasswordChange(password) {
		this.setState({ password });
	}

	handleLoginClick() {
		console.log("Login");
		this.props.login(this.state);
	}

	handleFacebookLoginClick() {
		console.log("Login Facebook");
	}

	componentDidMount() {
		this.props.getUser();
	}

	render () {
		return (
			<Wallpaper>
				<Container>
					<View style={style.titleWrapper}>
						<Image style={style.image} 
								source={require('../images/logo.png')}
						/>
					</View>

					<View style={{ marginTop: 130 }}>
						<FormContent>
							<Input placeholder="Username"
								value={this.state.username}
								onChangeText={this.handleUsernameChange}
								returnKeyType="next"
								onSubmitEditing={() => this.passwordInput.focus()}
							/>
						</FormContent>
						<FormContent>
							<Input placeholder="Password"
								value={this.state.password}
								secureTextEntry
								onChangeText={this.handlePasswordChange}
								ref={input => this.passwordInput = input}
							/>
						</FormContent>
						<FormContent>
							<Button  style={{ width: '80%' }} 
								title="Đăng nhập"
								color="#841584" 
								onPress={this.handleLoginClick}
							/>
						</FormContent>

						<Hr text="OR" 
							fontSize={13} 
							lineColor="#eee" 
							textPadding={5}
						/>

						<FormContent>
							<Button 
								title="Login with facebook" 
								color="#841584" 
								onPress={this.handleFacebookLoginClick}
							/>
					</FormContent>
					<FormContent>
						<TouchableOpacity 
							onPress={() => {
								this.props.navigation.navigate('Signup');
							}}>
							<Text>Tạo tài khoản mới</Text>
						</TouchableOpacity>
					</FormContent>
					</View>
				</Container>
			</Wallpaper>
		)
	}
}

export default connect(state => ({}), {
	login,
	getUser
	// fbLogin
})(Login);