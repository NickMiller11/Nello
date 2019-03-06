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
  } else {
    return state;
  }
}