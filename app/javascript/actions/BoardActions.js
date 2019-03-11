import apiClient from '../lib/ApiClient';
// import all, object types
import * as types from '../constants/ActionTypes';

export function createListSuccess(list) {
	return { type: types.CREATE_LIST_SUCCESS, list: list };
}

export function updateListSuccess(list) {
	return { type: types.UPDATE_LIST_SUCCESS, list: list };
}

export function fetchBoardsRequest() {
  return { type: types.FETCH_BOARDS_REQUEST };
}

export function fetchBoardRequest() {
  return { type: types.FETCH_BOARD_REQUEST };
}

export function fetchBoardsSuccess(boards) {
  return { type: types.FETCH_BOARDS_SUCCESS, boards };
}

export function fetchBoardSuccess(board) {
  return { type: types.FETCH_BOARD_SUCCESS, board };
}

export function createBoardRequest() {
  return { type: types.CREATE_BOARD_REQUEST };
}

export function createBoardSuccess(board) {
  return { type: types.CREATE_BOARD_SUCCESS, board: board };
}

export function updateListTitle(listId, title, callback) {
	return function(dispatch) {
		apiClient.updateList(listId, title, (listJson) => {
			dispatch(updateListSuccess(listJson));
			callback();
		});
	}
}

export function createList(boardId, list, callback) {
	return function(dispatch) {
		apiClient.createList(boardId, list, (listJson) => {
			dispatch(createListSuccess(listJson));
			callback();
		});
	}
}

export function fetchBoards() {
  return function(dispatch) {
    dispatch(fetchBoardsRequest());
    apiClient.getBoards(boards => dispatch(fetchBoardsSuccess(boards)));
  };
}

export function fetchBoard(id) {
  return function(dispatch) {
    //dispatch(fetchBoardRequest());
    apiClient.getBoard(id, board => dispatch(fetchBoardSuccess(board)));
  };
}


export function createBoard(board, callback) {
  return function(dispatch) {
    dispatch(createBoardRequest());
    apiClient.createBoard(board, newBoard => {
      dispatch(createBoardSuccess(newBoard))

      if (callback) { callback(newBoard); }
    })
  }
}
