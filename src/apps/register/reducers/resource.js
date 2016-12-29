const initialState = {};

export default function resourceReducer(state = initialState, action) {
  switch (action.type) {
    case 'REQUEST_RESOURCE':
      return {
        ...state,
        isFetching: true
      };
    case 'RECEIVE_RESOURCE':
      return {
        ...state,
        isFetching: false,
        payload: action.payload
      };
    default:
      return state;
  }
}
