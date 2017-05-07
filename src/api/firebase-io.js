import firebase from 'firebase'

import { firebase as config } from '../config'

const app = firebase.initializeApp(config)
const dbRef = firebase.database().ref(config.messagingSenderId)


export const FirebaseIO = {
  get (id) { 
    if (!id) // get all
      return dbRef.once('value', (snapshot) => snapshot.val())
    return dbRef.child(id).once('value', (snapshot) => snapshot.val())
  },
  post (body) { 
    return dbRef.push(body) 
  },
	put (id, body) { 
    return dbRef.child(id).set(body) 
  },
  delete(id) { 
    return dbRef.child(id).remove()
  }
}