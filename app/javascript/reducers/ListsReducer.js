export default function listsReducer(state = [], action) {
  if (action.type === 'FETCH_BOARD_SUCCESS') {
    const excludedBoards = state.filter(board => board.id !== action.board.id);
    const { lists, ...newBoardWithoutLists } = action.board;

    let listsWithoutCards = lists.map((list) => {
      const { cards, ...listWithoutCards } = list;
      return listWithoutCards;
    });

    let filteredLists = state.filter( list => list.board_id !== action.board.id);

    return filteredLists.concat(listsWithoutCards);
  } else if (action.type === 'CREATE_LIST_SUCCESS') {
      return state.concat(action.list);
  } else if (action.type === 'UPDATE_LIST_SUCCESS') {
      let filteredLists = state.filter( list => list.id !== action.list.id);
      return filteredLists.concat(action.list);
  } else {
    return state;
  }
}
