import React from 'react';
import { Route, Switch } from 'react-router-dom';

const Board = props => {
  console.log(props ? "yes props" : "no props");
  console.log(props);
  return (<div>Hello Board</div>);
//  if (props.board) {
//    return (<p>Hello Board</p>);
//  } else {
//    return null;
//  }
}

export default Board;
