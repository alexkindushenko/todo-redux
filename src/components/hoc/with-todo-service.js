import React from 'react';
import { TodoServiceConsumer } from '../todo-service-context';

const withTodoService = () => Wrapped => {
  return props => {
    return (
      <TodoServiceConsumer>
        {todoService => {
          return <Wrapped {...props} todoService={todoService} />;
        }}
      </TodoServiceConsumer>
    );
  };
};

export default withTodoService;
