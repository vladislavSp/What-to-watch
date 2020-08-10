import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import history from "../../history";
import configureStore from "redux-mock-store";
import {Router} from "react-router-dom";
import FilmList from "../film-list/film-list";
import {films} from "../../mocks/mocks";

const mockStore = configureStore([]);
const store = mockStore({});

it(`Film list renders correctly`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <Provider store={store}>
            <FilmList films={films} />
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
