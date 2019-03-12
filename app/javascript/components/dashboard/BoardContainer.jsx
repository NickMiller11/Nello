import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Board from './Board';
import PropTypes from 'prop-types';
import * as actions from '../../actions/BoardActions';
import ListContainer from './ListContainer';
import ModalCard from './ModalCard';


class BoardContainer extends React.Component {
	state = {
		activeListId: null,
		cardModal: false
	}

	handleCardModal = () => {
		this.setState({ cardModal: true });
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

  cardsFilter(id, cards) {
    return cards.filter((card) => {
      return card.list_id === id;
    });
  }

  handleAddDropdownClassToList = (list_id=null) => {
  	this.setState({ activeListId: list_id })
  }

  render() {
    let store = this.context.store;
    let boardId = Number(this.props.match.params.id);
    let board = store.getState().boards.find((board) => board.id === boardId);
    let cards = store.getState().cards;

		let lists = store.getState().lists.map((list) =>
			<ListContainer
		  	handleSetActiveList={this.handleAddDropdownClassToList}
				handleCardModal={this.handleCardModal}
		    cards={this.cardsFilter(list.id, cards)}
		    id={list.id}
		    boardId={list.board_id}
		    title={list.title}
		    classes={this.state.activeListId === list.id ? 'list-wrapper add-dropdown-active' : 'list-wrapper'}
			/>)

    return (
      <div>
        <Board
          board={board}
          lists={lists}
          cards={cards}
        />
			{this.state.cardModal ? <ModalCard/> : ''}
      </div>
    );
  }
}

export default BoardContainer;
