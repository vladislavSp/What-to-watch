import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './components/app/App.jsx';
import films from './mocks/films.js';
import reducer from './reducer.js';

const promoInfo = {
  promoTitle: `The Grand Budapest Hotel`,
  promoGenre: `Comedy/Drama`,
  promoYear: 2014,
};

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
    <Provider store={store}>
      <App promoTitle = { promoInfo.promoTitle }
        promoGenre = { promoInfo.promoGenre }
        promoYear = { promoInfo.promoYear }
        films = { films }
      />
    </Provider>,
    document.getElementById(`root`)
);
