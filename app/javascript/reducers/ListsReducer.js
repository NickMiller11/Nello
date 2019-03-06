export default function listsReducer(state = [], action) {
  if (action.type === 'FETCH_BOARD_SUCCESS') {
    const excludedBoards = state.filter(board => board.id !== action.board.id);
    const { lists, ...newBoardWithoutLists } = action.board;

    let listsWithoutCards = lists.map((list) => {
      const { cards, ...listWithoutCards } = list;
      return listWithoutCards;
    });
    
    return state.concat(listsWithoutCards);
  } else {
    return state;
  }
}
