import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Board from './Board';
import PropTypes from 'prop-types';
import * as actions from '../../actions/BoardActions';


class BoardContainer extends React.Component {
  componentDidMount() {
    let boardId = Number(this.props.match.params.id);
    const store = this.context.store;
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
    store.dispatch(actions.fetchBoard(boardId));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  render() {
    let store = this.context.store;
    let boardId = Number(this.props.match.params.id);
    let board = store.getState().boards.find((board) => board.id === boardId);
    let lists = store.getState().lists;
    let cards = store.getState().cards;
    return (
      <div>
        <Board
          board={board}
          lists={lists}
          cards={cards}
        />
      </div>
    );
  }
}

export default BoardContainer;
