import { JSONcopy } from '../ObjectUtils'

import { FETCH_POSTS, FETCH_POST, PUSH_POST, DELETE_POST } from '../actions'

/* TODO - something, possibly redux-promise, is mangling the object from firebase */
export default (state=[], action) => {
  let res = action.payload? JSONcopy(action.payload): {...state}
  switch (action.type) {
    case FETCH_POSTS:
      return res
    case FETCH_POST:
      return {...state, ...res}
    case PUSH_POST:
    case DELETE_POST:
      return res
  }
  return state
}