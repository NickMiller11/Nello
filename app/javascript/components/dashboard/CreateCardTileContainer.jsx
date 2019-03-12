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

	static contextTypes = {
		store: PropTypes.object.isRequired
	};

	handleOpenClick = () => {
		this.props.handleSetActiveList(this.props.listId);
		this.setState({ isOpen: true });
		// sets 'active-card' class to div with 'add-dropdown add-bottom'
		// The new card form is active when the parent .list-wrapper has the add-dropdown-active class and the .add-dropdown.add-bottom element has the active-card class.

		// Since only one list should have the form active at a time, only one list should have the add-dropdown-active class at a time.
	}

	handleCloseClick = () => {
		this.props.handleSetActiveList();
		this.setState({ isOpen: false });
	}

	handleTitleChange = (evt) => {
		this.setState({ title: evt.target.value });
	}

	handleSubmit = (evt) => {
  	evt.preventDefault();
  	evt.stopPropagation();

  	const store = this.context.store;
  	const listId = this.props.listId;

  	store.dispatch(actions.createCard( listId, { title: this.state.title }, () => {
			this.props.handleSetActiveList();
      this.setState({ isOpen: false, title: '' });
    }))
	}

	render() {
	 return (<CreateCardTile
      onOpenClick={this.handleOpenClick}
			onCloseClick={this.handleCloseClick}
			onTitleChange={this.handleTitleChange}
			title={this.state.title}
			onFormSubmit={this.handleSubmit}
			isOpen={this.state.isOpen}
    />)
	}
}

export default CreateCardTileContainer;
