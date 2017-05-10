const initalState = {
  Loading: false,
  podcasts: [],
}
 const search = (state = initalState, action) => {
  switch(action.type) {
    case 'LOADING_RESULTS':
      return {
        ...state,
        Loading: true,
      }
      case 'RECEIVED_RESULTS':
        return{
          ...state,
          Loading: false,
          podcasts: action.data
        }
      default:
        return state
  }
}
export default search;
