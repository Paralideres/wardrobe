const initialState = {
  isFetching: false,
  payload: {
    data: []
  }
};

export default function resourceReducer(state = initialState, action) {
  switch (action.type) {
    case 'REQUEST_RESOURCES':
      return {
        ...state,
        isFetching: true
      };
    case 'RECEIVE_RESOURCES':
      return {
        ...state,
        isFetching: false,
        payload: action.payload
      };
    default:
      return state;
  }
}
