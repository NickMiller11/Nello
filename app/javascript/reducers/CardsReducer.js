export default function cardsReducer(state = [], action) {
  if (action.type === 'FETCH_BOARD_SUCCESS') {
    const excludedBoards = state.filter(board => board.id !== action.board.id);
    const { lists, ...newBoardWithoutLists } = action.board;

    let listCards = lists.map((list) => {
      const { cards, ...listWithoutCards } = list;
      return cards;
    });

    return state.concat(listCards);
  } else {
    return state;
  }
}
