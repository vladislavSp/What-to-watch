import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import App from './components/app/App.jsx';
import reducer from './reducer/reducer.js';
import thunk from "redux-thunk";
import {createAPI} from './api.js';
import {Operation as UserOperation, ActionCreator, AuthorizationStatus} from './reducer/user/user.js';
import {composeWithDevTools} from 'redux-devtools-extension';

import {Operation as DataOperation} from './reducer/data/data.js';

const onUnauthorized = () => {
  store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
};

const api = createAPI(onUnauthorized);

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)))
);

// store.dispatch(UserOperation.checkAuth());
store.dispatch(DataOperation.loadFilms());
store.dispatch(DataOperation.loadPromo());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById(`root`)
);
