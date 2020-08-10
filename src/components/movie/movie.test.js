import React from "react";
import renderer from "react-test-renderer";
import {MoviePage} from "./movie.jsx";
import {films} from "../../mocks/mocks";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import NameSpace from "../../reducer/name-space";
import {Router} from "react-router-dom";
import history from "../../history";

const mockStore = configureStore([]);
const filteredGenreFilms = films;

jest.mock(`./movie-tabs/movie-tabs.jsx`, () => `MovieTabs`);

it(`renders Movie correctly`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      allFilms: films,
      promoFilm: films[0]
    },
    [NameSpace.APP]: {
      activeGenre: `All genre`,
      filmLength: 8
    },
    [NameSpace.USER]: {
      authorizationStatus: `NO_AUTH`,
      authorizationError: false,
      user: {id: 1, avatar: `avatar`, email: `mail`, name: `name`}
    }
  });

  const tree = renderer
    .create(
        <Router history={history}>
          <Provider store={store}>
            <MoviePage
              currentMovie={films[0]}
              user={{}}
              filteredGenreFilms={filteredGenreFilms}
              authorizationStatus={`NO_AUTH`}
              onViewListClick={() => {}}
            />
          </Provider>
        </Router>,
        {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
