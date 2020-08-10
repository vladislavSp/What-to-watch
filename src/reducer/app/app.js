import {GenreFilter, FILM_CARD} from '../../const/const.js';
import {extend} from '../../utils/utils.js';

const initialState = {
  activeGenre: GenreFilter.ALL,
  filmLength: FILM_CARD.VIEW_ITEM,
};

const ActionType = {
  SET_JENRE: `SET_JENRE`,
  SET_VIEW_FILM_CARD: `SET_VIEW_FILM_CARD`,
};

const ActionCreator = {
  setGenreType: (genreType) => ({
    type: ActionType.SET_JENRE,
    payload: genreType,
  }),

  setViewFilmCard: (num) => ({
    type: ActionType.SET_VIEW_FILM_CARD,
    payload: num,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_VIEW_FILM_CARD:
      return extend(state, {filmLength: action.payload + FILM_CARD.VIEW_ITEM});
    case ActionType.SET_JENRE:
      if (state.activeGenre !== action.payload) {
        return extend(state, {activeGenre: action.payload});
      }
  }
  return state;
};

export {reducer, ActionCreator, ActionType};
