import { fetchResource } from 'common/requesters/resources';

export function getResource() {
  return function thunk(dispatch) {

    dispatch({ type: 'REQUEST_RESOURCE' });

    return fetchResource().then(result => {
      dispatch({
        type: 'RECEIVE_RESOURCE',
        payload: result,
      });
    });
  };
}
