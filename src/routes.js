import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Home from './components/common/HomePage';
import Playlist from './components/common/Playlist';
import App from './components/App';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}></IndexRoute>
    <Route path="/playlist" component={Playlist}></Route>
  </Route>
);
