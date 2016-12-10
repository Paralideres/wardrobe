const initialState = {};

function usersReducer(state = initialState, action) {
  switch (action.type) {
    case 'REQUEST_CURRENT_USER':
      return Object.assign({}, state, {
        isFetching: true
      });
    case 'RECEIVE_CURRENT_USER':
      return Object.assign({}, state, {
        isFetching: false
      }, action.payload);
    default:
      return state;
  }
}

export default usersReducer;
