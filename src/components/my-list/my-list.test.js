import React from 'react';
import renderer from 'react-test-renderer';
import {MyList} from './my-list.jsx';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {Router} from 'react-router-dom';
import history from '../../history';
import {films} from '../../mocks/mocks';

const mockStore = configureStore([]);
const store = mockStore({});

jest.mock(`../sign-in/header/sign-header`, () => `SignHeader`);
jest.mock(`../film-list/film-list`, () => `FilmList`);

it(`My list renders correctly`, () => {
  const tree = renderer.create(
      <Router history={history}>
        <Provider store={store}>
          <MyList
            favoriteMovies={films}
          />
        </Provider>
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
