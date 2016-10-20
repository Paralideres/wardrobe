const initialState = {
  isFetching: false,
  payload: {}
};

export default function resourceReducer(state = initialState, action) {
  switch (action.type) {
    case 'REQUEST_BLOG_POSTS':
      return {
        ...state,
        isFetching: true
      };
    case 'RECEIVE_BLOG_POSTS':
      return {
        ...state,
        isFetching: false,
        payload: action.payload
      };
    default:
      return state;
  }
}
