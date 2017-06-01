const requestData = () => ({
  type: 'LOADING_RESULTS'
});
const dataReceived = data => ({
  type: 'RECEIVED_RESULTS',
  data
});

export const toggleSnackBar = () => ({
  type: 'TOGGLE_SNACKBAR'
});
export const getPodcasts = selectedValue => {
  return dispatch => {
    const url = `https://crossorigin.me/https://itunes.apple.com/search?term=${selectedValue}&country=us&entity=podcast&limit=50`;
    dispatch(requestData());
    fetch(url).then(response => response.json()).then(json =>
      setTimeout(() => {
        dispatch(dataReceived(json.results));
      }, 2000)
    );
  };
};
export const addFavorite = favorite => (dispatch, getState) => {
  const { favorites } = getState();

  if (!favorites.includes(favorite)) {
    dispatch({
      type: 'ADDING_FAVORITE',
      favorite
    });
    return setTimeout(() => {
      dispatch({
        type: 'CLOSE_SNACKBAR'
      });
    }, 2000);
  }

  dispatch({
    type: 'FAVORITE_ALREADY_ADDED'
  });
  return setTimeout(() => {
    dispatch({
      type: 'CLOSE_SNACKBAR'
    });
  }, 2000);
};
export const deleteFavorite = trackId => ({
  type: 'DELETE_ITEM',
  trackId
});
