export default function cardsReducer(state = [], action) {
  if (action.type === 'FETCH_BOARD_SUCCESS') {
    const excludedBoards = state.filter(board => board.id !== action.board.id);
    const { lists, ...newBoardWithoutLists } = action.board;

    let listCards = lists.reduce((acc, list) => {
      const { cards, ...listWithoutCards } = list;
      return acc.concat(cards);
    }, []);

    return state.filter(card => card.board_id !== action.board.id).concat(listCards);
  } else if (action.type === 'CREATE_CARD_SUCCESS') {
    return state.concat(action.card);
  } else {
    return state;
  }
}
