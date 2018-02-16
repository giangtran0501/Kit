import React, { Component } from 'react';
import { connect } from 'react-redux';
import PaperWithPadding from '../../components/PaperWithPadding';
import './Statistic.css';
import {Inbox as InboxIcon,
	LocationOn as LocationIcon,
	Book as BookIcon,
	AirplanemodeActive as TripIcon,
	SupervisorAccount as UserIcon,
	ViewList as TypeIcon
} from 'material-ui-icons';
import { Typography, Icon } from 'material-ui';

const styles = {
  largeIcon: {
    width: 60,
    height: 60,
  },
  large: {
    width: 60,
    height: 60
  },
};


class Statistic extends Component {
	constructor(props) {
		super(props);
		console.log("create statistic Component");
	}

	render () {
		return (
			<div>
				<div className="statistic-cotainer">
					<div className="paper user">
						<PaperWithPadding >
							<UserIcon />
							<Typography variant="display2" align="right">
								10.000
							</Typography>
							<Typography align="right">
								Người dùng
							</Typography>
						</PaperWithPadding>
					</div>
					<div className="paper plan">
						<PaperWithPadding >
							<BookIcon color="primary"/>
							<Typography variant="display2" align="right">
								10.000
							</Typography>
							<Typography align="right">
								Kế hoạch
							</Typography>
						</PaperWithPadding>
					</div>
					<div className="paper trip">
						<PaperWithPadding >
							<TripIcon color="secondary"/>
							<Typography variant="display2" align="right">
								10.000
							</Typography>
							<Typography align="right">
								Hành trình
							</Typography>
						</PaperWithPadding>
					</div>
					<div className="paper location">
						<PaperWithPadding >
							<LocationIcon color="action"/>
							<Typography variant="display2" align="right">
								10.000
							</Typography>
							<Typography align="right">
								Địa điểm
							</Typography>
						</PaperWithPadding>
					</div>
					<div className="paper type">
						<PaperWithPadding >
							<TypeIcon color="error" />
							<Typography variant="display2" align="right">
								10.000
							</Typography>
							<Typography align="right">
								Chủ đề quan tâm
							</Typography>
						</PaperWithPadding>
					</div>
				</div>
			</div>
		)
	}
}

export default Statistic;