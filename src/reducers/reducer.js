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
    generalList: state.list.filter(el => el.id !== id),
  };
};

const itemAddSuccess = (data, state) => {
  const newList = [...state.list, { ...data, id: data._id }];
  return {
    ...state,
    list: newList,
    active: state.list.length,
    generalList: newList,
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
  const newList = state.list.map(el =>
    el.id === id ? { ...el, done: !el.done } : el
  );
  return {
    ...state,
    list: newList,
    generalList: newList,
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

const filterListDone = state => {
  state.list = state.generalList;
  return {
    ...state,
    list: state.list.filter(el => el.done),
  };
};

const filterListAll = state => {
  return {
    ...state,
    list: state.generalList,
  };
};

const filterListActive = state => {
  state.list = state.generalList;
  return {
    ...state,
    list: state.list.filter(el => !el.done),
  };
};

const loginFormSubmitted = (res, state) => {
  return {
    ...state,
    homeRedirect: res.data.homeRedirect || false,
    isAuth: res.data.isAuth || false,
    errorLogin: res.data.message || null,
  };
};

const initialState = {
  list: [],
  doneCount: 0,
  loading: true,
  error: null,
  active: 0,
  generalList: [],
  homeRedirect: false,
  isAuth: true,
  errorLogin: null,
  errorRegister: null,
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
        isAuth: true,
      };
    case 'FETCH_LIST_SUCCESS':
      return {
        ...state,
        list: action.payload.todos || [],
        loading: false,
        error: null,
        generalList: action.payload.todos,
        isAuth: action.payload.isAuth,
        homeRedirect: false,
      };
    case 'FETCH_LIST_FAILURE':
      return {
        ...state,
        list: [],
        loading: false,
        error: action.payload,
      };

    case 'ITEM_ADD_SUCCESS':
      return itemAddSuccess(action.payload, state);
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
    case 'FILTER_LIST_UPDATE':
      return filterListAll(state);
    case 'FILTER_LIST_ACTIVE':
      return filterListActive(state);
    case 'FILTER_LIST_DONE':
      return filterListDone(state);

    case 'SEND_LOGIN_FORM_SUCCESS':
      return loginFormSubmitted(action.payload, state);
    case 'SEND_LOGIN_FORM_FAILURE':
      return {
        ...state,
        errorLogin: 'ERR_INTERNET_DISCONNECTED',
      };
    case 'SEND_REGISTER_FORM_SUCCESS':
      return {
        ...state,
        homeRedirect: action.payload.homeRedirect,
      };
    case 'SEND_REGISTER_FORM_FAILURE':
      return {
        ...state,
        errorRegister: 'ERR_INTERNET_DISCONNECTED',
      };

    case 'SEND_USER_LOGOUT_SUCCESS':
      return {
        ...state,
        isAuth: action.payload.isAuth,
        errorLogin: null,
        errorRegister: null,
      };
    default:
      return state;
  }
};

export default reducer;
