import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CardsContainer from './CardsContainer';
import ListContainer from './ListContainer';

const Board = props => {
  const cardsFilter = (id) => {
    return props.cards.filter((card) => {
      return card.list_id === id;
    });
  }

  let lists = props.lists.map((list) => <ListContainer
    cards={cardsFilter(list.id)}
    id={list.id}
    boardId={list.board_id}
    title={list.title}
  />);


  return (<div>
    <header>
      <ul>
        <li id="title">{props.board.title}</li>
        <li className="star-icon icon"></li>
        <li className="private private-icon icon">Private</li>
      </ul>
      <div className="menu">
        <i className="more-icon sm-icon"></i>Show Menu</div>
      <div className="subscribed">
        <i className="sub-icon sm-icon"></i>Subscribed</div>
    </header>
    <main>
      <div id="list-container" className="list-container">
        <div id="existing-lists" className="existing-lists">
          {lists}
        </div>
        <div id="new-list" className="new-list"><span>Add a list...</span>
            <input type="text" placeholder="Add a list..." />
            <div>
                <input type="submit" className="button" value="Save" /><i className="x-icon icon"></i>
            </div>
        </div>
      </div>

    </main>
  </div>);
}

export default Board;
