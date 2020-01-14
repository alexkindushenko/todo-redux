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
    .then(() => dispatch(updateDoneCount()))
    .catch(err => dispatch(listError(err)));
};

const itemAddToList = str => {
  return {
    type: 'ITEM_ADD_TO_LIST',
    payload: str,
  };
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

const updateImportantItem = id => {
  return {
    type: 'UPDATE_IMPORTANT_ITEM',
    payload: id,
  };
};

const updateDoneItem = id => {
  return {
    type: 'UPDATE_DONE_ITEM',
    payload: id,
  };
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

export {
  fetchList,
  itemAddToList,
  itemRemuveFromList,
  updateDoneCount,
  updateImportantItem,
  updateDoneItem,
  searchItemInList,
  filterListActive,
  filterListAll,
  filterListDone,
};
