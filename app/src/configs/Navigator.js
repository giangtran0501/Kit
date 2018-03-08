import Home from '../containers/Home';
import Login from '../containers/Login';
import Signup from '../containers/Signup';
import { StackNavigator } from 'react-navigation';
import { Platform, StatusBar } from 'react-native';

const Navigator = StackNavigator({
	Home: {
		screen: Home
	},
	Login: {
		screen: Login
	},
	Signup: {
		screen: Signup
	}
}, {
	cardStyle: {
		paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
	},
	initialRouteName: 'Login',
	'headerMode': 'screen'
});

export default Navigator;
