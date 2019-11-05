import React from 'react';
import { connect } from 'react-redux';
import { searchItemInList } from '../../actions';

import './search-panel.css';

const SearchPanel = ({ onSearch }) => {
  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="type to search"
      onChange={e => onSearch(e.target.value)}
    />
  );
};

const mapDispachToProps = {
  onSearch: searchItemInList,
};

export default connect(
  () => ({}),
  mapDispachToProps
)(SearchPanel);
