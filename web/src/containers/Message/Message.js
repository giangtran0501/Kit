import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import { closeMessage } from '../../actions/message';

const styleSheet = theme => ({
	close: {
		width: theme.spacing.unit * 4,
		height: theme.spacing.unit * 4
	},
});

const Message = ({ classes, showMessage, closeMessage, open, message }) => (
	<div>
		<Snackbar
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'left',
			}}
			open={open}
			autoHideDuration={5e3}
			onClose={(event, reason) => {
				if (reason !== 'clickaway') {
					closeMessage();
				}
			}}
			SnackbarContentProps={{
				'aria-describedby': 'message-id',
			}}
			message={<span id="message-id">{message}</span>}
			action={[
				<IconButton
					key="close"
					aria-label="Close"
					color="primary"
					className={classes.close}
					onClick={closeMessage}
				>
					<CloseIcon />
				</IconButton>,
			]}
		/>
	</div>
);

export default connect(state => ({
	open: state.message.open,
	message: state.message.message
}), {
	closeMessage
})(withStyles(styleSheet)(Message));