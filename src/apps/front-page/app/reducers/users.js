
const initialState = [];

function usersReducer(state = initialState, action) {
  switch (action.type) {
    case 'REQUEST_USERS':
      return action.payload;
    default:
      return state;
  }
}

export default usersReducer;
