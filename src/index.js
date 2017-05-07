import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import promise from 'redux-promise'

import reducers from './reducers';
import Post from './components/post';
import Posts from './components/posts';
import NewPost from './components/newpost';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route path="/new" component={NewPost} />
        <Route path="/:id" component={Post} />
        <Route path="/" component={Posts} />
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
