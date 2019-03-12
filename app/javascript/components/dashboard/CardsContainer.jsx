import React from 'react';
import Card from './Card';

class CardsContainer extends React.Component {

//  componentDidMount() {
//    // subscribe, get card, refresh view
//  }

  render() {
      return (
        <div id="cards-container" data-id="list-1-cards">
          <Card
            handleCardModal={this.props.handleCardModal}
            openCard={this.handleOpenCard}
          />
        </div>
      );
  }
}


export default CardsContainer;
