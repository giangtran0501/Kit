import React, { Component } from 'react'; 
import {
	StyleSheet,
	ImageBackground 
} from 'react-native';
import imgRes from '../images/wallpaper.jpg'

class Wallpaper extends Component {
	render() {
		return (
			<ImageBackground style={style.picture} source={imgRes}>
				{this.props.children}
			</ImageBackground>
		)
	}
}

const style = StyleSheet.create({
	picture: {
		flex: 1,
		width: null,
		height: null,
		// resizeMode: 'cover',
	}
});

export default Wallpaper;