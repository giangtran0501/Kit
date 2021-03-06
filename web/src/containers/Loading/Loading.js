import React from 'react';
import './Loading.css';
import { CircularProgress } from 'material-ui/Progress';
import { CSSTransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';

const Loading = ({show}) => (
	// <CSSTransitionGroup
		// transitionName="loading"
		// transitionEnterTimeout={200}
		// transitionLeaveTimeout={200}
	// >
	<div>
		{show &&
			<div className="loadingContainer">
				<div>
					<CircularProgress size={80} thickness={7}/>
				</div>
			</div>
		}
	</div>
	// </CSSTransitionGroup>
)

export default connect(state => ({
	show: state.loading.status
}), {})(Loading);