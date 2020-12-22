import {adaptedUser} from "../../adapters/userAdapter";
import {extend} from "../../utils/utils";

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`
};

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  authorizationError: false,
  user: {},
  isAuthorizationLoading: true,
};

const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  CHANGE_AUTHORIZATION_ERROR: `CHANGE_AUTHORIZATION_ERROR`,
  SET_USER: `SET_USER`,
  SET_AUTH_LOADING: `SET_AUTH_LOADING`,
};

const ActionCreator = {
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status
  }),

  changeAuthorizationError: (status) => ({
    type: ActionType.CHANGE_AUTHORIZATION_ERROR,
    payload: status
  }),

  setUser: (user) => ({
    type: ActionType.SET_USER,
    payload: user
  }),

  setAuthLoading: (flag) => ({
    type: ActionType.SET_AUTH_LOADING,
    payload: flag
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {authorizationStatus: action.payload});
    case ActionType.CHANGE_AUTHORIZATION_ERROR:
      return extend(state, {authorizationError: action.payload});
    case ActionType.SET_USER:
      return extend(state, {user: adaptedUser(action.payload)});
    case ActionType.SET_AUTH_LOADING:
      return extend(state, {isAuthorizationLoading: action.payload});
  }

  return state;
};

const Operation = {
  // api - приходит из applyMiddleware
  checkAuth: () => (dispatch, getState, api) => {
    return api
      .get(`/login`)
      .then((response) => {
        if (response.data !== undefined) {
          dispatch(
              ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)
          );
          dispatch(ActionCreator.setUser(response.data));
          dispatch(ActionCreator.setAuthLoading(false));
        }
      })
      .catch(() => {
        dispatch(
            ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)
        );
      });
  },

  login: (authData) => (dispatch, getState, api) => {
    return api
      .post(`/login`, {
        email: authData.login,
        password: authData.password
      })
      .then((response) => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.changeAuthorizationError(false));
        dispatch(ActionCreator.setUser(response.data));
      })
      .catch((err) => {
        dispatch(ActionCreator.changeAuthorizationError(true));
        throw err;
      });
  }
};

export {reducer, ActionCreator, ActionType, AuthorizationStatus, Operation};
