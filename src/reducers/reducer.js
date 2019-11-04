const itemRemuveFromList = (id, state) => {
  return {
    ...state,
    list: state.list.filter(el => el.id !== id),
  };
};

const itemAddToList = (str, state) => {
  return {
    ...state,
    list: [
      ...state.list,
      {
        id: Math.floor(Math.random() * 1000),
        label: str,
        important: false,
        done: false,
      },
    ],
  };
};

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
    active: state.list.length - state.list.filter(el => el.done).length,
    doneCount: state.list.filter(el => el.done).length,
  };
};

const updateDoneCount = state => {
  return {
    ...state,
    doneCount: state.list.filter(el => el.done).length,
    active: state.list.length - state.list.filter(el => el.done).length,
  };
};

const initialState = {
  list: [],
  doneCount: 0,
  loading: true,
  error: null,
  active: 0,
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
