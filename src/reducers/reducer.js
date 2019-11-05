const itemRemuveFromList = (id, state) => {
  let rateDone = 0;
  let rateActive = 1;
  const elem = state.list.filter(el => el.id === id);
  if (elem[0].done) {
    rateDone = 1;
    rateActive = 0;
  }
  return {
    ...state,
    list: state.list.filter(el => el.id !== id),
    active: state.list.length - state.doneCount - rateActive,
    doneCount: state.list.filter(el => el.done).length - rateDone,
  };
};

const itemAddToList = (str, state) => {
  const id = Math.floor(Math.random() * 1000);
  return {
    ...state,
    list: [
      ...state.list,
      {
        id,
        label: str,
        important: false,
        done: false,
      },
    ],
    active: state.list.length,
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
  let rateDone = 1;
  const elem = state.list.filter(el => el.id === id);
  if (elem[0].done) {
    rateDone = -1;
  }
  return {
    ...state,
    list: state.list.map(el => (el.id === id ? { ...el, done: !el.done } : el)),
    active: state.list.length - state.doneCount - rateDone,
    doneCount: state.list.filter(el => el.done).length + rateDone,
  };
};

const updateDoneCount = state => {
  return {
    ...state,
    doneCount: state.list.filter(el => el.done).length,
    active: state.list.length - state.list.filter(el => el.done).length,
  };
};

const searchItemInList = (str, state) => {
  state.list = state.generalList;
  return {
    ...state,
    list: state.list.filter(el =>
      el.label.toLowerCase().includes(str.toLowerCase())
    ),
  };
};

const initialState = {
  list: [],
  doneCount: 0,
  loading: true,
  error: null,
  active: 0,
  generalList: [],
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
        generalList: [],
      };
    case 'FETCH_LIST_SUCCESS':
      return {
        list: action.payload,
        loading: false,
        error: null,
        generalList: action.payload,
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
    case 'SEARCH_ITEM_IN_LIST':
      return searchItemInList(action.payload, state);

    default:
      return state;
  }
};

export default reducer;
