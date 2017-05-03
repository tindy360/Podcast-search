const initalState = {
  Loading: false,
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
        }
      default:
        return state
  }
}
export default search;
