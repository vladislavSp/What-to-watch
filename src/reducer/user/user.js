import {extend} from '../../utils/utils';
import {ActionCreator as StateActionCreator} from "../app/app";
import {APP_PAGE} from '../../const/const';

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  authorizationError: false,
};

const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  CHANGE_AUTHORIZATION_ERROR: `CHANGE_AUTHORIZATION_ERROR`,
};

const ActionCreator = {
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),

  changeAuthorizationError: (status) => ({
    type: ActionType.CHANGE_AUTHORIZATION_ERROR,
    payload: status,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {authorizationStatus: action.payload});
    case ActionType.CHANGE_AUTHORIZATION_ERROR:
      return extend(state, {authorizationError: action.payload});
  }

  return state;
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
    .then(() => {
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
    })
    .catch((err) => {
      throw err;
    });
  },

  login: (authData) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authData.login,
      password: authData.password,
    })
    .then(() => {
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(ActionCreator.changeAuthorizationError(false));
      dispatch(StateActionCreator.changeAppPage(APP_PAGE.MAIN_PAGE));
    })
    .catch((err) => {
      dispatch(ActionCreator.changeAuthorizationError(true));
      throw err;
    });
  },
};

export {reducer, ActionCreator, ActionType, AuthorizationStatus, Operation};
