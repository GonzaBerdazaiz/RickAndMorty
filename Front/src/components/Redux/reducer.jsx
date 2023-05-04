import { ADD_FAVORITES, REMOVE_FAVORITE, FILTER, ORDER } from "./actions";

const initialState = {
  myFavorites: [],
  allCharactersFav: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITES:
      return {
        ...state,
        myFavorites: [...state.allCharactersFav, action.payload],
        allCharactersFav: [...state.allCharactersFav, action.payload],
      }; //copiamos el estado(...state) y a myFav le damos una copia de lo q teniamos y agregamos el payload
    case REMOVE_FAVORITE:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          char => char.id !== action.payload
        ),
      };
    case FILTER:
      const allCharactersFiltered = state.allCharactersFav.filter(
        (char) => char.gender === action.payload
      );
      return {
        ...state,
        myFavorites:
          action.payload === "allCharacters"
            ? [...state.allCharactersFav]
            : allCharactersFiltered,
      };
    case ORDER:
      return {
        ...state,
        myFavorites:
          action.payload === "asc"
            ? state.allCharactersFav.sort((a, b) => a.id - b.id)
            : state.allCharactersFav.sort((a, b) => b.id - a.id),
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
