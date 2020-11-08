import NameSpace from "../name-space.js";

const NAME_SPACE = NameSpace.USER;

export const getAuthorizationStatus = (state) => state[NAME_SPACE].authorizationStatus;

export const getAuthorizationError = (state) => state[NAME_SPACE].authorizationError;

export const getUser = (state) => state[NAME_SPACE].user;

export const getLoadingAuthStatus = (state) => state[NAME_SPACE].isAuthorizationLoading;
