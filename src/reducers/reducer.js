// import updateTodoList from './update-todo-list';
// import updateFilterList from './update-filter-list';
const itemRemuveFromList = (id, state) => {
  return {
    ...state,
    list: state.list.filter(el => el.id !== id),
  };
};

const itemAddToList = (id, state) => {};

const updateImportantItem = (id, state) => {
  return {
    ...state,
    list: state.list.map(el =>
      el.id === id ? { ...el, important: !el.important } : el
    ),
  };
};

const updateDoneItem = (id, state) => {
  return {
    ...state,
    list: state.list.map(el => (el.id === id ? { ...el, done: !el.done } : el)),
  };
};
const updateDoneCount = state => {};

const initialState = {
  list: [],
  doneCount: 0,
  loading: true,
  error: null,
};

const reducer = (state = initialState, action) => {
  console.log(action.type);

  switch (action.type) {
    case 'FETCH_LIST_REQUEST':
      return {
        ...state,
        list: [],
        loading: true,
        error: null,
      };
    case 'FETCH_LIST_SUCCESS':
      return {
        ...state,
        list: action.payload,
        loading: false,
        error: null,
      };
    case 'FETCH_LIST_FAILURE':
      return {
        ...state,
        list: [],
        loading: false,
        error: action.payload,
      };
    case 'ITEM_ADD_TO_LIST':
      return itemAddToList(action.payload, state);

    case 'ITEM_REMUVE_FROM_LIST':
      return itemRemuveFromList(action.payload, state);

    case 'UPDATE_IMPORTANT_ITEM':
      return updateImportantItem(action.payload, state);

    case 'UPDATE_DONE_ITEM':
      return updateDoneItem(action.payload, state);

    case 'UPDATE_DONE_COUNT':
      return updateDoneCount(state);

    default:
      return state;
  }
};

export default reducer;
