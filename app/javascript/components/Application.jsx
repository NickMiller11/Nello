import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import BoardContainer from './dashboard/BoardContainer';
import CardsContainer from './dashboard/CardsContainer';

import TopNav from './shared/TopNav';
import BoardsDashboardContainer from './dashboard/BoardsDashboardContainer';

import { fetchBoards } from '../actions/BoardActions';

class Application extends React.Component {
  static contextTypes = {
    store: PropTypes.object,
  }

  componentDidMount() {
    const store = this.context.store;
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
    // console.log(this.context);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const state = this.context.store.getState();

    return (
      <div>
        <TopNav />
        <Route path='/(boards|cards)/:id' exact component={BoardContainer} />
        <Route path='/cards/:id' exact component={CardsContainer} />

        <Route path='/' exact component={BoardsDashboardContainer} />
      </div>
    );
  }
}

export default Application;
