import React from 'react';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';

const styleSheet = theme => ({
	root: {
		display: 'block',
		width: "100%"
	},
	input: {
		width: "100%"
	}
});

const TextInput = withStyles(styleSheet)(({classes, ...rest}) => (
	<TextField
		className={classes.root}
		inputclassname={classes.input} {...rest}
	/>
));

export default TextInput;