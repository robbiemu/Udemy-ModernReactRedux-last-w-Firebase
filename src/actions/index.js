import { FirebaseIO } from '../api/firebase-io'

export const FETCH_POSTS = 'fetch posts'
export const PUSH_POST = 'push post'

export function fetchPosts () {
  return {
    type: FETCH_POSTS,
    payload: FirebaseIO.get()
  }
}

export function pushPost (body) {
  return {
    type: PUSH_POST,
    payload: FirebaseIO.post(body)
  }
}