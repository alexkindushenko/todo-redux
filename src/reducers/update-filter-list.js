const updateFilterList = (state, action) => {
  if (state === undefined) {
    return {
      doneCount: 0,
    };
  }
  switch (action.type) {
    case 'ITEM_ADD_TO_LIST':
      return itemAddToList(action.payload, state);

    case 'ITEM_REMUVE_FROM_LIST':
      return itemRemuveFromList(action.payload, state);

    case 'UPDATE_IMPORTANT_ITEM':
      return updateImportantItem(action.payload, state);

    case 'UPDATE_DONE_ITEM':
      return updateDoneItem(action.payload, state);

    case 'UPDATE_DONE_COUNT':
      return updateDoneCount();

    default:
      return state.filteredList;
  }
};

const itemRemuveFromList = (id, state) => {};

const itemAddToList = (id, state) => {
  console.log(id);
};

const updateImportantItem = (id, state) => {
  const { list } = state.todoList;
  //   const item = list.find(el => el.id === id);
  //   console.log(item);
  console.log(list.map(el => (el.id === id ? { ...el, done: el.done } : el)));
  //   return {
  //     list: [item],
  //   };

  return {
    ...list,
    list: list.map(el => (el.id === id ? { ...el, done: el.done } : el)),
  };
};

const updateDoneItem = (id, state) => {
  const { list } = state.todoList;
  const item = list.find(el => el.id === id);
  console.log(item);

  return {
    todoList: [
      ...list.map(el =>
        el.id === id ? { ...el, important: el.important } : el
      ),
    ],
  };
};

const updateDoneCount = state => {};

export default updateFilterList;
