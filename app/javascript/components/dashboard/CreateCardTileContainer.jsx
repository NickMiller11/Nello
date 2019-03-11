import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import CreateCardTile from './CreateCardTile';
import * as actions from '../../actions/BoardActions';

class CreateCardTileContainer extends React.Component {

	state = {
		isOpen: false,
		title: '',
	}

	handleOpenClick() {

		// The new card form is active when the parent .list-wrapper has the add-dropdown-active class and the .add-dropdown.add-bottom element has the active-card class.

		// Since only one list should have the form active at a time, only one list should have the add-dropdown-active class at a time.
	}

	render() {
	 return (<CreateCardTile
    	formOpen={this.state.isOpen}
      onOpenClick={this.handleOpenClick}
      // onCloseClick={this.handleCloseClick}
      // onFormSubmit={this.handleSubmit}
      // onTitleChange={this.handleTitleChange}
      // title={this.state.title}
    />)
	}
}

export default CreateCardTileContainer;