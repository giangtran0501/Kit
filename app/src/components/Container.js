import React from 'react';
import { KeyboardAvoidingView , StyleSheet } from 'react-native';

const Container = (props) => (
	<KeyboardAvoidingView behavior="padding" style={style.container} {...props} />
);

const style = StyleSheet.create({
	container: {
		padding: 20,
		flex: 1,
		// flexDirection: 'column' 
		justifyContent: 'flex-start',
    	// alignItems: 'center',
    	// width: '80%'
    	// height: '100%'
	}
});

export default Container;
