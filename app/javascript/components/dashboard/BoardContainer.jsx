import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Board from './Board';
import PropTypes from 'prop-types';
import * as actions from '../../actions/BoardActions';


class BoardContainer extends React.Component {
	state = {
		activeListId: null,
	}

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

  const cardsFilter = (id) => {
    return props.cards.filter((card) => {
      return card.list_id === id;
    });
  }

  let lists = store.getState().lists.map((list) => <ListContainer
  	handleCreateCard={this.props.handleCreateCard}
    cards={cardsFilter(list.id)}
    id={list.id}
    boardId={list.board_id}
    title={list.title}
    classes=(this.getState().activeListId === list.id ? 'list-wrapper add-dropdown-active' : 'list-wrapper')
  />);

  handleAddDropdownClassToList = (list_id) => {
  	this.setState({ activeListId: list_id })
  }

  render() {
    let store = this.context.store;
    let boardId = Number(this.props.match.params.id);
    let board = store.getState().boards.find((board) => board.id === boardId);
    let cards = store.getState().cards;
    return (
      <div>
        <Board
          board={board}
          lists={this.lists}
          cards={cards}
        />
      </div>
    );
  }
}

export default BoardContainer;
