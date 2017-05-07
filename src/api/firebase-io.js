import firebase from 'firebase'

require("babel-polyfill");
import { JSONcopy } from '../ObjectUtils'

import { firebase as config } from '../config'

const app = firebase.initializeApp(config)
const dbRef = firebase.database().ref(config.messagingSenderId)


export const FirebaseIO = {
  async get (id) { 
    if (!id) // get all
      return dbRef.once('value', (snapshot) => snapshot.val())
    return {[id]: await dbRef.child(id)
      .once('value', async (snapshot) => snapshot.val())
    }
  },
  post (body, cb=(o)=>o ) { 
    return dbRef.push(body).then(cb) 
  },
	put (id, body) { 
    return dbRef.child(id).set(body) 
  },
  delete(id, cb=(o)=>o) { 
    return dbRef.child(id).remove().then(cb)
  }
}