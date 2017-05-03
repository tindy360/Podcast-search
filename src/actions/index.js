const requestData = () => ({
  type:'LOADING_RESULTS'
})
const dataReceived = (data) => ({
  type:'RECEIVED_RESULT',
  data
})
export const getPodcasts = (selectedValue, searchValue) => {
  return dispatch => {
    dispatch(requestData())
    fetch(`https://itunes.apple.com/search?term=${searchValue}&country=us&entity=podcast&attribute=${selectedValue}&limit=50`)
    .then(response => response.json)
    .then(json => dispatch(dataReceived(json.results)))
  }
}
