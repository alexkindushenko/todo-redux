import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import './todo-list.css';
import TodoListItem from '../todo-list-item';
import { withTodoService } from '../hoc';
import { fetchList, doneItem, importantItem, deleteItem } from '../../actions';
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
      isAuth,
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
    if (!isAuth) {
      return <Redirect to="/login" />;
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

const mapStateToProps = ({ loading, list, error, isAuth }) => {
  return {
    loading,
    list,
    error,
    isAuth,
  };
};

const mapDispachToProps = (dispatch, { todoService }) => {
  return bindActionCreators(
    {
      fetchList: fetchList(todoService),
      onImportantItem: id => dispatch(importantItem(todoService, id)),
      onDoneItem: id => dispatch(doneItem(todoService, id)),
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
