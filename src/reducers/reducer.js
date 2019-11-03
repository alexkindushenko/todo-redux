import updateTodoList from './update-todo-list';

const reducer = (state, action) => {
  console.log(action.type);
  return {
    todoList: updateTodoList(state, action),
    // filterList: filterList(state, action),
  };
};
export default reducer;
