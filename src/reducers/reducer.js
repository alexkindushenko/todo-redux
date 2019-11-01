const initialState = {
  list: [],
  loading: true,
  error: null,
};

const reducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    default:
      return state;
  }
};
export default reducer;
