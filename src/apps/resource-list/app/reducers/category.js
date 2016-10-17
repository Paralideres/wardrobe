const initialState = {
  isFetching: false,
  payload: {
    id: 0,
    label: '',
    slug: '',
    resources: {}
  }
};

export default function resourceReducer(state = initialState, action) {
  switch (action.type) {
    case 'REQUEST_CATEGORY':
      return {
        ...state,
        isFetching: true
      };
    case 'RECEIVE_CATEGORY':
      return {
        ...state,
        isFetching: false,
        payload: action.payload
      };
    default:
      return state;
  }
}
