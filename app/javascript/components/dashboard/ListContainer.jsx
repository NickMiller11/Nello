import React from 'react';
import CardsContainer from './CardsContainer';
import ChangableTitle from './ChangableTitle';

class ListContainer extends React.Component {
  state = {
    editableTitle: false,
  }

  showInput = () => {
    this.setState({ editableTitle: true });
  }

  returnToParagraph = () => {
    this.setState({ editableTitle: false });
  }

  render() {
    let cards = this.props.cards.map((card) => <CardsContainer
      id={card.id}
      title={card.title}
      description={card.description}
      dueDate={card.due_date}
    />);

    return (
      <div className="list-wrapper">
          <div className="list-background">
              <div className="list">
                  <a className="more-icon sm-icon" href=""></a>
                  <div>
                    {this.state.editableTitle ?
                      (<ChangableTitle
                        id={this.props.id}
                        title={this.props.title}
                        returnToParagraph={this.returnToParagraph}
                      />) :
                      (<p onClick={this.showInput} className="list-title">{this.props.title}</p>)
                    }
                  </div>
                  <div className="add-dropdown add-top">
                      <div className="card"></div><a className="button">Add</a><i className="x-icon icon"></i>
                      <div className="add-options"><span>...</span>
                      </div>
                  </div>
                  {cards}
                  <div className="add-dropdown add-bottom">
                      <div className="card"><div className="card-info"></div><textarea name="add-card"></textarea><div className="members"></div></div>
                      <a className="button">Add</a><i className="x-icon icon"></i>
                      <div className="add-options"><span>...</span>
                      </div>
                  </div>
                  <div className="add-card-toggle" data-position="bottom">Add a card...</div>
              </div>
          </div>
      </div>

    );
  }
}

export default ListContainer;
