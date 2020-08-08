import {reducer, ActionCreator, ActionType, AuthorizationStatus} from './user.js';
import {userObj} from '../../mocks/mocks';
import {adaptedUser} from '../../adapters/userAdapter';

describe(`User reducer tests`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      authorizationError: false,
      user: {},
    });
  });

  it(`Reducer should change authorizationStatus by a given value`, () => {
    expect(reducer({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    }, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    })).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
    });

    expect(reducer({
      authorizationStatus: AuthorizationStatus.AUTH,
    }, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH,
    })).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    });

    expect(reducer({
      authorizationStatus: AuthorizationStatus.AUTH,
    }, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    })).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
    });

    expect(reducer({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    }, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH,
    })).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    });

    expect(reducer({
      authorizationError: false,
    }, {
      type: ActionType.CHANGE_AUTHORIZATION_ERROR,
      payload: true,
    })).toEqual({
      authorizationError: true,
    });

    expect(reducer({
      authorizationError: true,
    }, {
      type: ActionType.CHANGE_AUTHORIZATION_ERROR,
      payload: false,
    })).toEqual({
      authorizationError: false,
    });

    expect(reducer({
      user: {},
    }, {
      type: ActionType.SET_USER,
      payload: userObj,
    })).toEqual({
      user: adaptedUser(userObj),
    });
  });

  it(`Action creator for require authorization returns correct action`, () => {
    expect(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.NO_AUTH,
    });

    expect(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    });
  });

  it(`Action creator for authorization errors returns correct action`, () => {
    expect(ActionCreator.changeAuthorizationError(false)).toEqual({
      type: ActionType.CHANGE_AUTHORIZATION_ERROR,
      payload: false,
    });

    expect(ActionCreator.changeAuthorizationError(true)).toEqual({
      type: ActionType.CHANGE_AUTHORIZATION_ERROR,
      payload: true,
    });
  });

  it(`Action creator for setting user returns correct action`, () => {
    expect(ActionCreator.setUser(userObj)).toEqual({
      type: ActionType.SET_USER,
      payload: userObj,
    });
  });
});
