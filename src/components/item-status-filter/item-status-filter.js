import React from 'react';
import { connect } from 'react-redux';
import { filterListActive, filterListAll, filterListDone } from '../../actions';

import './item-status-filter.css';

const ItemStatusFilter = ({ onFilterActive, onFilterAll, onFilterDone }) => {
  return (
    <div className="btn-group">
      <button onClick={onFilterAll} className="btn btn-info">
        All
      </button>
      <button onClick={onFilterActive} className="btn btn-outline-secondary">
        Active
      </button>
      <button onClick={onFilterDone} className="btn btn-outline-secondary">
        Done
      </button>
    </div>
  );
};

const mapDispatchToProps = {
  onFilterAll: filterListAll,
  onFilterActive: filterListActive,
  onFilterDone: filterListDone,
};
export default connect(
  () => ({}),
  mapDispatchToProps
)(ItemStatusFilter);
