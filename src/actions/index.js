const listLoaded = data => {
  return {
    type: 'FETCH_LIST_SUCCESS',
    payload: data,
  };
};
const listRequested = () => {
  return {
    type: 'FETCH_LIST_REQUEST',
  };
};
const listError = err => {
  return {
    type: 'FETCH_LIST_FAILURE',
    payload: err,
  };
};

const fetchList = todoService => () => dispatch => {
  dispatch(listRequested());
  todoService
    .getList()
    .then(data => dispatch(listLoaded(data)))
    .catch(err => dispatch(listError(err)));
};

export { fetchList };
