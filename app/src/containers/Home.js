import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

class Home extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>Changes you make will automatically reload.</Text>
				<Text>Shake your phone to open the developer menu.</Text>
				<Text> ố ồ </Text>
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

export default connect(state => ({}), {})(Home);
