const initialState = {
  isFetching: false,
  payload: {
    options: []
  }
};

export default function resourceReducer(state = initialState, action) {
  switch (action.type) {
    case 'REQUEST_POLL':
      return {
        ...state,
        isFetching: true
      };
    case 'RECEIVE_POLL':
      return {
        ...state,
        isFetching: false,
        payload: action.payload
      };
    default:
      return state;
  }
}
