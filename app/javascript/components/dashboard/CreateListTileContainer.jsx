import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import CreateListTile from './CreateListTile';


class CreateListTileContainer extends React.Component {
  state = {
    isOpen: false,
		title: '',
  }
 

  handleOpenClick = (evt) => {
  	evt.stopPropagation();
    this.setState({isOpen: true});
  }

  handleCloseClick = (evt) => {
  	evt.stopPropagation();
  	this.setState({isOpen: false});
  }

  handleSubmit = (evt) => {
  	evt.preventDefault();
  	evt.stopPropagation();

  	// dispatch list action to store
  	// list action is create list
  	// which hits POST api
  	// request payload includes title and board_id
  	// updating list actions, updating lists reducer

  	// other thing we need to do:
  	// add PUT api/lists/id to routes
  	// handle click on list title: changes p tag to input tag
		// handles title change
		// add update action to lists controller
  }

  handleTitleChange = (evt) => {
  	this.setState({title: evt.target.value});
  }

  render() {
    return (	
      <CreateListTile
      	formOpen={this.state.isOpen}
        onOpenClick={this.handleOpenClick}
        onCloseClick={this.handleCloseClick}
        onFormSubmit={this.handleSubmit}
        onTitleChange={this.handleTitleChange}
        title={this.state.title}
      />
    )
  };
}

export default CreateListTileContainer;
