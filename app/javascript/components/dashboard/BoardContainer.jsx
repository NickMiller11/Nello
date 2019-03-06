import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Board from './Board';
import PropTypes from 'prop-types';

class BoardContainer extends React.Component {
  componentDidMount() {
    const store = this.context.store;
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

// send a dispatch/action to the store,
// dispatch uses a method on the client object
// apiClient, nested response
// define reducers (list, cards)
// list reducer gets list from the board
// cards ...
// use the return value within the component 



//  componentWillUnmount() {
//    this.unsubscribe();
//  }

  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  render() {
    let store = this.context.store;
    let boardId = Number(this.props.match.params.id);
    let board = store.getState().boards.find((board) => board.id === boardId);
    return (
      <div>
        <Board board={board}/>
      </div>
    );
  }
}

export default BoardContainer;
