import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Board from './Board';

class BoardContainer extends React.Component {
//  componentDidMount() {
//    const store = this.context.store;
//    this.unsubscribe = store.subscribe(() => this.forceUpdate());
//  }

//  componentWillUnmount() {
//    this.unsubscribe();
//  }

  render() {
    return (
      <div>
        <Board/>
      </div>
    );
  }
}

export default BoardContainer;
