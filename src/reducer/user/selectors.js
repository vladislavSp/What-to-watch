import NameSpace from "../name-space.js";

const NAME_SPACE = NameSpace.USER;

export const getAuthorizationStatus = (state) => {
  return state[NAME_SPACE].authorizationStatus;
};

export const getAuthorizationError = (state) => {
  return state[NameSpace.USER].authorizationError;
};

export const getUser = (state) => {
  return state[NameSpace.USER].user;
};