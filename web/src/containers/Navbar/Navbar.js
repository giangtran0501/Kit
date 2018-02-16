import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, IconButton } from 'material-ui';
import { 
	Menu as MenuIcon,
	MoreVert as MoreVertIcon,
	Search as SearchIcon
} from 'material-ui-icons';
import './Navbar.css';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Menu, { MenuItem } from 'material-ui/Menu';
import { connect } from 'react-redux';
import { logout } from '../../actions/logout';

const styleSheet = theme => ({
	title: {
		flex: 1,
		color: 'inherit',
		fontSize: 20
	}
});

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			anchorEl: undefined,
			openSearchDialog: false,
			open: false,
			isHideIconMenu: true
		}
		this.handleMenuClick = this.handleMenuClick.bind(this);
		this.handleRequestClose = this.handleRequestClose.bind(this);
		this.handleLogoutClick = this.handleLogoutClick.bind(this);
	}

	handleMenuClick(e) {
		this.setState({
			open: true,
			openSearchDialog: false,
			anchorEl: e.currentTarget
		});
	}

	handleCloseSearchDialog(e) {
		this.setState({
			openSearchDialog: false,
		})
	}

	handleOpenSearchDialog(e) {
		this.setState({
			openSearchDialog: true,
		})
	}

	handleRequestClose() {
		this.setState({
			open: false
		});
	}

	handleLogoutClick() {
		this.handleRequestClose();
		this.props.logout();
	}

	render () {
		const { classes } = this.props;
		return (
			<AppBar>
				<Toolbar>
					<IconButton className={"menuIcon" + 
						(this.state.isHideIconMenu ? " hide" : "")}
						style={{color: 'white'}}
						onClick={this.props.onLeftIconClick}
					>
						<MenuIcon />
					</IconButton>
					<Typography type="title" 
						className={classes.title}
					>
						Application
					</Typography>
					<IconButton style={{color: 'white'}} onClick={this.handleMenuClick}>
						<SearchIcon />
					</IconButton>
					<IconButton style={{color: 'white'}} onClick={this.handleMenuClick}>
						<MoreVertIcon />
					</IconButton>
					<Menu
						anchorEl={this.state.anchorEl}
						open={this.state.open}
						onClose={this.handleRequestClose}
					>
						<MenuItem onClick={this.handleLogoutClick}>Logout</MenuItem>
					</Menu>
				</Toolbar>
			</AppBar>
		)
	}
}

export default connect(state => ({}), {
	logout
})(withStyles(styleSheet)(Navbar));