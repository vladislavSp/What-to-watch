import React from "react";
import renderer from "react-test-renderer";
import {PrivateRoute} from "./private-route.jsx";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {Router} from "react-router-dom";
import history from "../../history";
import MyList from "../my-list/my-list.jsx";

const mockStore = configureStore([]);
const store = mockStore({});

jest.mock(`../my-list/my-list`, () => `MyList`);

it(`Private route renders correctly`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <Provider store={store}>
            <PrivateRoute
              exact
              path="/mylist"
              requiredAuthorizationStatus={`AUTH`}
              pathToRedirect={`/login`}
              authorizationStatus={`AUTH`}
              render={() => {
                return <MyList />;
              }}
            />
          </Provider>
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
