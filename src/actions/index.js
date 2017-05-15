const requestData = () => ({
  type:'LOADING_RESULTS'
})
const dataReceived = (data) => ({
  type:'RECEIVED_RESULTS',
  data
})
export const getPodcasts = (selectedValue) => {
  return dispatch => {
    const url = `https://itunes.apple.com/search?term=${selectedValue}&country=us&entity=podcast&limit=50`
    console.log(url)
    dispatch(requestData())
    fetch(url)
    .then(response => response.json())
    .then(json => setTimeout(() => {
      dispatch(dataReceived(json.results))
      // redirect to new route here
    }, 3000))
  }
}
