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
		const store = this.context.store;
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
    store.dispatch(actions.fetchBoard(this.getBoardId()));
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

	getBoardId = () => {
		let boardId;
		const store = this.context.store;
    let id = Number(this.props.match.params.id);
		let url = this.props.match.url
		if (url.match(/cards/)) {
			boardId = store.getState().cards.find((card) => (card.id === id)).board_id;
		} else {
			boardId = id;
		}

		return boardId;
	}

  render() {
    let store = this.context.store;
		let boardId = this.getBoardId();
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

		if (board) {
			return (
	      <div>
	        <Board
	          board={board}
	          lists={lists}
	          cards={cards}
	        />
				{this.state.cardModal ? <ModalCard /> : ''}
	      </div>
	    );
		} else {
			return null;
		}

  }
}

export default BoardContainer;
