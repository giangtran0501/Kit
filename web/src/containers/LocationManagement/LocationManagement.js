import React, { Component } from 'react';
import { testImg } from '../../actions/testImg';
import { connect } from 'react-redux';

class LocationManagement extends Component {
	constructor(props) {
		super(props);
		console.log("create LocationManagement");
	}

	componentDidMount() {
		// this.props.testImg(1);
		// console.log("this.props.img", this.props.img.url);
	}

	render () {
		return (
			<div>
				<h1>Quản lý địa điểm</h1>
				<img src="/uploads/test/SG.jpg"
					width='auto'
					height='200px' 
					alt='test'/>
			</div>
		)
	}
}

export default connect(state => ({
	img: state.img
}), {
	testImg
})(LocationManagement);
