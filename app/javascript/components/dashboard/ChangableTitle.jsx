import React from 'react';
import PropTypes from 'prop-types';
import * as actions from '../../actions/BoardActions';



class ChangableTitle extends React.Component {
  state = {
    title: this.props.title
  }

  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  handleBlur = (evt) => {
    const newTitle = evt.target.value;
    this.context.store.dispatch(actions.updateListTitle(this.props.id, newTitle,
      this.props.returnToParagraph));
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
