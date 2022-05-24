export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";


export function addFavorite(user) {
  return {
    type: ADD_FAVORITE,
    payload: {
        user,
    },
  };
}

export function removeFavorite(user) {
  return {
    type: REMOVE_FAVORITE,
    payload: {
        user,
    },
  };
}


