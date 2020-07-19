import {genreFilter} from '../../const/const.js';
import {extend} from '../../utils/utils.js';

const initialState = {
  activeGenre: genreFilter.ALL,
};

const ActionType = {
  SET_JENRE: `SET_JENRE`,
};

const ActionCreator = {
  setGenreType: (genreType) => ({
    type: ActionType.SET_JENRE,
    payload: genreType,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_JENRE:
      if (state.activeGenre !== action.payload) {
        return extend(state, {activeGenre: action.payload});
      }
  }
  return state;
};

export {reducer, ActionCreator, ActionType};
