import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as actions from '../../actions/BoardActions';

const CreateCardTile = props => {
	const classes = ['add-dropdown', 'add-bottom'];

	if (props.isOpen) {
		classes.push('active-card');
	}
	return (
		<div>
			<div className={classes.join(' ')}>
				<div className="card"><div className="card-info"></div><textarea onChange={props.onTitleChange} value={props.title} name="add-card"></textarea><div className="members"></div></div>
				<a onClick={props.onFormSubmit} className="button">Add</a><i onClick={props.onCloseClick} className="x-icon icon"></i>
				<div className="add-options"><span>...</span></div>
			</div>
			<div onClick={props.onOpenClick} className="add-card-toggle" data-position="bottom">Add a card...</div>
		</div>)
}


export default CreateCardTile;
