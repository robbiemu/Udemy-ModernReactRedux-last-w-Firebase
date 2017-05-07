import { JSONcopy } from '../ObjectUtils'

import { FETCH_POSTS, PUSH_POST } from '../actions'

/* TODO - something, possibly redux-promise, is mangling the object from firebase */
export default (state=[], action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return JSONcopy(action.payload)
    case PUSH_POST:
      return JSONcopy(action.payload)
  }
  return state
}