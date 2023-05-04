export const ADD_FAVORITES = "ADD_FAVORITES";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

export const addFavorites = (character) => {
  return { type: ADD_FAVORITES, payload: character };
};

export const removeFavorite = (id) => {
  return { type: REMOVE_FAVORITE, payload: id };
};

export const filterCards = (gender) => {
  return { type: FILTER, payload: gender };
};

export const orderCards = (id) => {
  return { type: ORDER, payload: id };
};
