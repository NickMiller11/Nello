import React from 'react';
import ModalCard from './ModalCard';
import PropTypes from 'prop-types';
import * as actions from '../../actions/BoardActions';

class ModalCardContainer extends React.Component {
  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  componentDidMount() {
    const store = this.context.store;
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
    store.dispatch(actions.fetchCard(Number(this.props.match.params.id)));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    let store = this.context.store.getState();
    let card = store.cards.find((card) => {
      return card.id === Number(this.props.match.params.id);
    });
    
    return (
      <ModalCard
        card={card}
        />
    );
  }
}


export default ModalCardContainer;
