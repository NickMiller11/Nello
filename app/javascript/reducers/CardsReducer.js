export default function cardsReducer(state = [], action) {
  if (action.type === 'FETCH_BOARD_SUCCESS') {
    const excludedBoards = state.filter(board => board.id !== action.board.id);
    const { lists, ...newBoardWithoutLists } = action.board;

    let listCards = lists.reduce((acc, list) => {
      const { cards, ...listWithoutCards } = list;
      return acc.concat(cards.map((card) => Object.assign({}, card, {comments: []})));
    }, []);

    return state.filter(card => card.board_id !== action.board.id).concat(listCards);
  } else if (action.type === 'CREATE_CARD_SUCCESS') {
    return state.concat(action.card);
  } else if (action.type === 'FETCH_CARD_SUCCESS'){
  	const excludedCards = state.filter(card => card.id !== action.card.id);
  	return excludedCards.concat(action.card);
  } else {
    return state;
  }
}
