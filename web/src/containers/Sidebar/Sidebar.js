import React, { Component } from 'react';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import {Inbox as InboxIcon,
	Home as HomeIcon,
	LocationOn as LocationIcon,
	Book as BookIcon,
	AirplanemodeActive as TripIcon,
	SupervisorAccount as UserIcon,
	ViewList as TypeIcon
} from 'material-ui-icons';
import { Drawer } from 'material-ui';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import { Link } from 'react-router-dom';
import getWindowWidth from '../../utils/getWindowWidth';
import { responsiveWidth } from '../../constants/values';
import './Sidebar.css';

const styleSheet = theme => ({
	paper: {
		paddingTop: 70,
		zIndex: 1000
	},
	modal: {
		zIndex: 1000
	}
});

const sideList = (
	<div>
		<List style={{
		    width: 270,
		    flex: 'initial',
		}} disablePadding>
			<Link to="/statistic" className="sidebar-item">
				<ListItem button>
					<ListItemIcon>
						<HomeIcon />
					</ListItemIcon>
					<ListItemText primary="Trang chủ" />
				</ListItem>
			</Link>
			<Link to="/planManagement" className="sidebar-item">
				<ListItem button>
					<ListItemIcon>
						<BookIcon />
					</ListItemIcon>
					<ListItemText primary="Quản lý kế hoạch" />
				</ListItem>
			</Link>
			<Link to="/travelManagement" className="sidebar-item">
				<ListItem button>
					<ListItemIcon>
						<TripIcon />
					</ListItemIcon>
					<ListItemText primary="Quản lý hành trình" />
				</ListItem>
			</Link>
			<Link to="/userManagement" className="sidebar-item">
				<ListItem button>
					<ListItemIcon>
						<UserIcon />
					</ListItemIcon>
					<ListItemText primary="Quản lý tài khoản" />
				</ListItem>
			</Link>
			<Link to="/locationManagement" className="sidebar-item">
				<ListItem button>
					<ListItemIcon>
						<LocationIcon />
					</ListItemIcon>
					<ListItemText primary="Quản lý địa điểm" />
				</ListItem>
			</Link>
			<Link to="/typeManagement" className="sidebar-item">
				<ListItem button>
					<ListItemIcon>
						<TypeIcon />
					</ListItemIcon>
					<ListItemText primary="Quản lý chủ đề du lịch" />
				</ListItem>
			</Link>
		</List>
	</div>
);

class Sidebar extends Component {

	render() {
		return (
			<Drawer
				open={this.props.open}
				variant={(getWindowWidth() < responsiveWidth) ? "temporary" : "permanent"}
				classes={this.props.classes}
				onClose={(getWindowWidth() < responsiveWidth) ? this.props.onRequestClose : null}
				onClick={(getWindowWidth() < responsiveWidth) ? this.props.onRequestClose : null}
			>
				{sideList}
			</Drawer>
		);
	}
}

export default withStyles(styleSheet)(Sidebar);