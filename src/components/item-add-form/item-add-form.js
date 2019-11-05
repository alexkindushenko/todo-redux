import React from 'react';
import { connect } from 'react-redux';
import { itemAddToList } from '../../actions';

import './item-add-form.css';

class ItemAddForm extends React.Component {
  state = { str: '' };

  render() {
    const { onItemAddToList } = this.props;
    const inputValue = e => {
      this.setState({ str: e.target.value });
    };

    const addItem = e => {
      e.preventDefault();
      if (this.state.str) {
        onItemAddToList(this.state.str);
        this.setState({ str: '' });
      }
    };
    return (
      <form className="item-add-form d-flex">
        <input
          className="form-control"
          type="text"
          placeholder="What next?"
          value={this.state.str}
          onChange={inputValue}
        />
        <button
          type="submit"
          className="btn btn-outline-secondary"
          onClick={addItem}
        >
          Add
        </button>
      </form>
    );
  }
}

const mapDispachToProps = {
  onItemAddToList: itemAddToList,
};

export default connect(
  () => ({}),
  mapDispachToProps
)(ItemAddForm);
