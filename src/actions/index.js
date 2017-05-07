import { FirebaseIO } from '../api/firebase-io'

export const FETCH_POSTS = 'fetch posts'
export const FETCH_POST = 'fetch post'
export const PUSH_POST = 'push post'
export const DELETE_POST = 'delete post'

export function fetchPosts () {
  return {
    type: FETCH_POSTS,
    payload: FirebaseIO.get()
  }
}

export function fetchPost (id) {
  return {
    type: FETCH_POST,
    payload: FirebaseIO.get(id)
  }
}

export function pushPost (body, cb) {
  let rx = {
    type: PUSH_POST,
    payload: FirebaseIO.post(body, cb)
  }
  return rx
}

export function deletePost (id, cb) {
  let rx = {
    type: DELETE_POST,
    payload: FirebaseIO.delete(id,cb)
  }
  return rx
}