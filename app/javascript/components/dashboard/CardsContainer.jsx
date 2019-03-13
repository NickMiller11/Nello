import React from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';

class CardsContainer extends React.Component {

//  componentDidMount() {
//    // subscribe, get card, refresh view
//  }

  render() {
      return (

          <div id="cards-container" data-id="list-1-cards">
            <Link to={`/cards/${this.props.id}`}>
              <Card
                handleCardModal={this.props.handleCardModal}
                openCard={this.handleOpenCard}
              />
            </Link>
          </div>

      );
  }
}


export default CardsContainer;
