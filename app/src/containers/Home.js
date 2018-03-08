import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { logout } from '../actions/logout';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.handleLogoutClick = this.handleLogoutClick.bind(this);
	}

	handleLogoutClick () {
		this.props.logout();
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>Changes you make will automatically reload.</Text>
				<Text>Shake your phone to open the developer menu.</Text>
				<Text> ố ồ  1223</Text>
				<Button
				title="Đăng xuất"
				color="#841584" 
				onPress={this.handleLogoutClick}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	}
});

export default connect(state => ({}), {
	logout
})(Home);
