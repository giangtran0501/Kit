import React, { Component } from 'react';
import './Home.css';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import getWindowWidth from '../../utils/getWindowWidth';
import { responsiveWidth } from '../../constants/values';
import { 
	Route, 
	Switch, 
} from 'react-router-dom';
import Statistic from '../Statistic';
import PlanManagement from '../PlanManagement';
import LocationManagement from '../LocationManagement';
// 
class Home extends Component {
	constructor(props) {
		super(props);
		const w = getWindowWidth();
		this.state = {
			sidebarOpen: (w < responsiveWidth) ? false : true,
			lstWindowWidth: getWindowWidth()
		}
		this.toggleSidebar = this.toggleSidebar.bind(this);
		this.handleWindowResize = this.handleWindowResize.bind(this);
	}

	handleWindowResize() {
		const w = getWindowWidth();
		let open = this.state.sidebarOpen;
		if (w >= responsiveWidth) {
			open = true;
		} else {
			if (open) {
				if (this.state.lstWindowWidth >= w && 
					this.state.lstWindowWidth >= responsiveWidth) 
					open = false;
				else 
					open = true;
			} else {
				open = false;
			}
		}
		this.setState({
			sidebarOpen: open,
			lstWindowWidth: w
		});
	}

	componentDidMount() {
		window.addEventListener('resize', this.handleWindowResize);
		this.handleWindowResize();
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.handleWindowResize);
	}

	toggleSidebar() {
		this.setState({
			sidebarOpen: !this.state.sidebarOpen
		});
	}

	render() {
		return (
			<div>
				<Sidebar 
					open={this.state.sidebarOpen}
					onRequestClose={this.toggleSidebar}
				/>
				<Navbar onLeftIconClick={this.toggleSidebar}/>
				<div className={"home-content-container" + 
					(this.state.sidebarOpen ? " toggle-left" : "")}
				>
					<Switch>
						<Route exact path="/home" component={Statistic} />
						<Route exact path="/statistic" component={Statistic} />
						<Route exact path="/planManagement" component={PlanManagement}/>
						<Route exact path="/travelManagement" />
						<Route exact path="/userManagement" />
						<Route exact path="/locationManagement" component={LocationManagement}/>
						<Route exact path="/typeManagement" />
					</Switch>
				</div>
			</div>
		)
	}
}

export default Home;