import {genreFilter, APP_PAGE, MAX_FILM_CARD} from '../../const/const.js';
import {extend} from '../../utils/utils.js';


const initialState = {
  activeGenre: genreFilter.ALL,
  currentAppPage: APP_PAGE.MAIN_PAGE,
  filmLength: MAX_FILM_CARD,
};

const ActionType = {
  SET_JENRE: `SET_JENRE`,
  CHANGE_CURRENT_APP_PAGE: `CHANGE_CURRENT_APP_PAGE`,
  SET_VIEW_FILM_CARD: `SET_VIEW_FILM_CARD`,
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

  setViewFilmCard: (num) => ({
    type: ActionType.SET_VIEW_FILM_CARD,
    payload: num,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_VIEW_FILM_CARD:
      return extend(state, {filmLength: action.payload});
    case ActionType.CHANGE_CURRENT_APP_PAGE:
      return extend(state, {currentAppPage: action.payload});
    case ActionType.SET_JENRE:
      if (state.activeGenre !== action.payload) {
        return extend(state, {activeGenre: action.payload});
      }
  }
  return state;
};

export {reducer, ActionCreator, ActionType};
