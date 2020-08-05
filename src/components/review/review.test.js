import React from 'react';
import renderer from 'react-test-renderer';
import {Review} from './review.jsx';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {Router} from 'react-router-dom';
import history from '../../history';
import {films} from '../../mocks/mocks';

const mockStore = configureStore([]);

const store = mockStore({
  APP: {
    activeGenre: `All genre`,
    filmLength: 8
  },
  USER: {
    authorizationStatus: `NO_AUTH`,
    authorizationError: false,
    user: {id: 1, avatar: `avatar`, email: `mail`, name: `name`}
  }
});

it(`Review render correctly`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <Provider store={store}>
            <Review
              currentMovie={films[0]}
            />
          </Provider>
        </Router>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
