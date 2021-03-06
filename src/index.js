import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
import reducers from './reducers';
import SearchShow from './components/search_show';
import ShowDetails from './containers/show-details';
import AppNavbar from './components/app-navbar';
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <AppNavbar/>
        <Switch>
          <Route path="/tvshow/:id" component={ShowDetails} />
          <Route path="/" component={SearchShow} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('#root'));