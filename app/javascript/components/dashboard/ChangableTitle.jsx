import React from 'react';

class ChangableTitle extends React.Component {

  state = {
    title: this.props.title
  }

  handleBlur = (evt) => {
    const newTitle = evt.target.value;
    this.context.store.dispatch(actions.updateListTitle(this.props.id, newTitle,
      this.props.returnToParagraph()));
  }

  updateTitle = (evt) => {
    this.setState({ title: evt.target.value })
  }

  render() {
    return (
      <input
        className="list-title"
        value={this.state.title}
        onChange={this.updateTitle}
        onBlur={this.handleBlur}
      ></input>


    )
  };
}

export default ChangableTitle;
