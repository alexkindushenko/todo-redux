import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './todo-list.css';
import TodoListItem from '../todo-list-item';
import { withTodoService } from '../hoc';
import {
  fetchList,
  updateDoneItem,
  updateImportantItem,
  itemRemuveFromList,
  deleteItem,
} from '../../actions';
import ErrorIndicator from '../error-indicator';
import Spiner from '../spiner';
import ErrorBoundry from '../error-boundry';
class TodoList extends React.Component {
  componentDidMount() {
    this.props.fetchList();
  }

  render() {
    const {
      loading,
      list,
      error,
      onDoneItem,
      onImportantItem,
      onRemoveFromList,
    } = this.props;
    if (loading) {
      return <Spiner />;
    }
    if (error) {
      return <ErrorIndicator />;
    }
    return (
      <ErrorBoundry>
        <ul className="list-group todo-list">
          {list.map(el => (
            <TodoListItem
              label={el.label}
              key={el.id}
              done={el.done}
              important={el.important}
              onDoneItem={() => onDoneItem(el.id)}
              onImportantItem={() => onImportantItem(el.id)}
              onRemoveFromList={() => onRemoveFromList({ id: el.id })}
            />
          ))}
        </ul>
      </ErrorBoundry>
    );
  }
}

const mapStateToProps = ({ loading, list, error }) => {
  return {
    loading,
    list,
    error,
  };
};

const mapDispachToProps = (dispatch, { todoService }) => {
  return bindActionCreators(
    {
      fetchList: fetchList(todoService),
      onImportantItem: updateImportantItem,
      onDoneItem: updateDoneItem,
      onRemoveFromList: id => dispatch(deleteItem(todoService, id)),
    },
    dispatch
  );
};

export default withTodoService()(
  connect(
    mapStateToProps,
    mapDispachToProps
  )(TodoList)
);
