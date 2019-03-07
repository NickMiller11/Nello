import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import CreateListTile from './CreateListTile';

class CreateListTileContainer extends React.Component {
  let state = {
    isOpen: false;
  }

  const handleOnClick = (evt) => {
    this.setState = Object.assign({}, {isOpen: true});
  }

  render() {
    return (
      <CreateListTile
        onClick={this.handleOnClick}/>
    )
  };
}

export default CreateListTileContainer;
