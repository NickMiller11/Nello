import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as actions from '../../actions/BoardActions';

class CreateCardTile extends React.Component {
	render() {
	  return (
	  	<div>
	  	<div className="add-dropdown add-bottom active-card">
		  <div className="card"><div className="card-info"></div><textarea name="add-card"></textarea><div className="members"></div></div>
		  <a className="button">Add</a><i className="x-icon icon"></i>
		  <div className="add-options"><span>...</span>
		  </div>
		</div>
		<div className="add-card-toggle" data-position="bottom">Add a card...</div>
		</div>)
	}
}

export default CreateCardTile;