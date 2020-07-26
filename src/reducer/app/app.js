import {genreFilter, AppPage} from '../../const/const.js';
import {extend} from '../../utils/utils.js';


const initialState = {
  activeGenre: genreFilter.ALL,
  currentAppPage: AppPage.MAIN_PAGE,
};

const ActionType = {
  SET_JENRE: `SET_JENRE`,
  CHANGE_CURRENT_APP_PAGE: `CHANGE_CURRENT_APP_PAGE`,
};

const ActionCreator = {
  setGenreType: (genreType) => ({
    type: ActionType.SET_JENRE,
    payload: genreType,
  }),

  changeAppPage: (appPage) => ({
    type: ActionType.CHANGE_CURRENT_APP_PAGE,
    payload: appPage,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_JENRE:
      if (state.activeGenre !== action.payload) {
        return extend(state, {activeGenre: action.payload});
      }
      break;
    case ActionType.CHANGE_CURRENT_APP_PAGE:
      return extend(state, {currentAppPage: action.payload});
  }
  return state;
};

export {reducer, ActionCreator, ActionType};
