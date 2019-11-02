import React from 'react';
import './item-add-form.css';

const ItemAddForm = () => {
  return (
    <form className="item-add-form d-flex">
      <input className="form-control" type="text" placeholder="What next?" />
      <button type="submit" className="btn btn-outline-secondary">
        Add
      </button>
    </form>
  );
};

export default ItemAddForm;
