import React from 'react';
import CardsContainer from './CardsContainer';
import ChangableTitle from './ChangableTitle';
import CreateCardTileContainer from './CreateCardTileContainer';

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
      listId={this.props.id}
      id={card.id}
      title={card.title}
      description={card.description}
      dueDate={card.due_date}
    />);

    return (
      <div className={this.props.classes}>
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
                  <CreateCardTileContainer
                    handleSetActiveList={this.props.handleSetActiveList}
                    listId={this.props.id}
                  />
              </div>
          </div>
      </div>

    );
  }
}

export default ListContainer;
