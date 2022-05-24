import { ADD_FAVORITE } from "./action";
import { REMOVE_FAVORITE } from "./action";


const INITIAL_STATE = {
    favorites: [],
}

const Reduser = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case ADD_FAVORITE: {
            const user = action.payload?.user;
            return {
                ...state,
                favorites: [
                    ...state.favorites,
                    user
                ],
            };
        }

        case REMOVE_FAVORITE: {
            const user = action.payload?.user;
            const prevFavorites = state.favorites;
            const newFavorites = prevFavorites.filter( (favUser) => favUser !== user )
            return {
                ...state,
                favorites:newFavorites,
            };
        }

        default:
            return state;
    }
};

export default Reduser;