const initalState = {
  Loading: false,
  podcasts: [],
  favorites: [],
  open: false,
  message: ''
};
const search = (state = initalState, action) => {
  switch (action.type) {
    case 'LOADING_RESULTS':
      return {
        ...state,
        Loading: true
      };
    case 'RECEIVED_RESULTS':
      return {
        ...state,
        Loading: false,
        podcasts: action.data
      };
    case 'ADDING_FAVORITE':
      return {
        ...state,
        favorites: state.favorites.concat(action.favorite),
        open: true,
        message: 'Added to Favorites'
      };
    case 'FAVORITE_ALREADY_ADDED':
      return {
        ...state,
        open: true,
        message: 'Podcast already in favorites'
      };
    case 'CLOSE_SNACKBAR':
      return {
        ...state,
        open: false
      };
      case 'DELETE_ITEM':
        return [
      ...state.favorites.slice(0, action.index),
      ...state.favorites.slice(action.index + 1)
     ]
    default:
      return state;
  }
};
export default search;
