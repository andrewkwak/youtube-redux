import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyB2tyHm3wBWPUrpcCmHmHpgJ75MGGyAEqo';

export default (state = [], action) => {
  console.log(action)
  switch(action.type) {
    case 'GET_VIDEOS':
      console.log(action.promise.then( (val) => { console.log( val ); } ))
      let value;
      return [
        ...state,
        Object.assign({}, action.videos)
      ]
    default:
      return state

    // case 'GET_VIDEOS_FULFILLED':
    //
    //   let value;
    //   return [
    //     ...state,
    //     Object.assign({}, action.videos)
    //   ]

  }
}
