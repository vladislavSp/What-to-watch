import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import {films} from "../../mocks/mocks";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {GenreFilter} from "../../const/const.js";
import NameSpace from "../../reducer/name-space";
import history from "../../history";
import {Router} from "react-router-dom";

const mockStore = configureStore([]);

it(`Main renders correctly`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      allFilms: films,
      promoFilm: films[0]
    },
    [NameSpace.APP]: {
      activeGenre: GenreFilter.ALL,
      filmLength: 0
    },
    [NameSpace.USER]: {
      authorizationStatus: `NO_AUTH`,
      authorizationError: false,
      user: {}
    }
  });

  const tree = renderer
    .create(
        <Router history={history}>
          <Provider store={store}>
            <Main />
          </Provider>
        </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
