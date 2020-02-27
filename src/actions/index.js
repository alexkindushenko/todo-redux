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
    .getTodoList()
    .then(res => dispatch(listLoaded(res.data)))
    .then(() => dispatch(updateDoneCount()))
    .catch(err => dispatch(listError(err)));
};

const itemAddSuccess = res => {
  return {
    type: 'ITEM_ADD_SUCCESS',
    payload: res,
  };
};
const itemAddError = err => {
  return {
    type: 'ITEM_ADD_FAILURE',
    payload: err,
  };
};
const addItem = (todoService, data) => () => dispatch => {
  todoService
    .addItem(data)
    .then(res => dispatch(itemAddSuccess(res.data.todo)))
    .then(() => dispatch(updateDoneCount()))
    .catch(err => dispatch(itemAddError(err)));
};

const searchItemInList = str => {
  return {
    type: 'SEARCH_ITEM_IN_LIST',
    payload: str,
  };
};

const itemRemuveFromList = id => {
  return {
    type: 'ITEM_REMUVE_FROM_LIST',
    payload: id,
  };
};
const deleteError = err => {
  return {
    type: 'DELETE_FAILURE',
    payload: err,
  };
};
const deleteItem = (todoService, id) => () => dispatch => {
  todoService
    .deleteItem(id)
    .then(res => dispatch(itemRemuveFromList(res.data.id)))
    .catch(err => {
      console.log(err);
      return dispatch(deleteError(err));
    });
};

const updateImportantItem = id => {
  return {
    type: 'UPDATE_IMPORTANT_ITEM',
    payload: id,
  };
};
const updateImportantError = err => {
  return {
    type: ' IMPORTANT_FAILURE',
    payload: err,
  };
};
const importantItem = (todoService, id) => () => dispatch => {
  todoService
    .updateItem({ id, important: true })
    .then(res => dispatch(updateImportantItem(res.data.id)))
    .catch(err => dispatch(updateImportantError(err)));
};

const updateDoneItem = id => {
  return {
    type: 'UPDATE_DONE_ITEM',
    payload: id,
  };
};
const updateDoneError = err => {
  return {
    type: ' DONE_FAILURE',
    payload: err,
  };
};
const doneItem = (todoService, id) => () => dispatch => {
  todoService
    .updateItem({ id, done: true })
    .then(res => dispatch(updateDoneItem(res.data.id)))
    .then(() => dispatch(updateDoneCount()))
    .catch(err => dispatch(updateDoneError(err)));
};

const updateDoneCount = () => {
  return {
    type: 'UPDATE_DONE_COUNT',
  };
};

const filterListAll = () => {
  return {
    type: 'FILTER_LIST_UPDATE',
  };
};

const filterListActive = () => {
  return {
    type: 'FILTER_LIST_ACTIVE',
  };
};

const filterListDone = () => {
  return {
    type: 'FILTER_LIST_DONE',
  };
};

const loginFormSubmitted = res => {
  return {
    type: 'SEND_LOGIN_FORM_SUCCESS',
    payload: res,
  };
};

const loginFormError = err => {
  return {
    type: 'SEND_LOGIN_FORM_FAILURE',
    payload: err,
  };
};

const sendLoginForm = (todoService, data) => () => dispatch => {
  todoService
    .sendLoginForm(data)
    .then(res => dispatch(loginFormSubmitted(res)))
    .catch(err => dispatch(loginFormError(err)));
};

const registerFormSubmitted = data => {
  return {
    type: 'SEND_REGISTER_FORM_SUCCESS',
    payload: data,
  };
};
const registerFormError = err => {
  return {
    type: 'SEND_REGISTER_FORM_FAILURE',
    payload: err,
  };
};
const sendRegisterForm = (todoService, data) => () => dispatch => {
  todoService
    .sendRegisterForm(data)
    .then(res => dispatch(registerFormSubmitted(res.data)))
    .catch(err => dispatch(registerFormError(err)));
};
const userLogoutSuccess = res => {
  return {
    type: 'SEND_USER_LOGOUT_SUCCESS',
    payload: res,
  };
};
const userLogout = todoService => () => dispatch => {
  todoService
    .userLogout()
    .then(res => dispatch(userLogoutSuccess(res)))
    .catch(err => console.log(err));
};

export {
  fetchList,
  itemRemuveFromList,
  updateDoneCount,
  importantItem,
  doneItem,
  deleteItem,
  addItem,
  searchItemInList,
  filterListActive,
  filterListAll,
  filterListDone,
  sendLoginForm,
  sendRegisterForm,
  userLogout,
};
