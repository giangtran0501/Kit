import Home from '../containers/Home';
import { StackNavigator } from 'react-navigation';
import { Platform, StatusBar } from 'react-native';

const Navigator = StackNavigator({
	Home: {
		screen: Home
	}
}, {
	cardStyle: {
		paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
	},
	initialRouteName: 'Home'
});

export default Navigator;
