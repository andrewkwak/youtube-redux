import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyB2tyHm3wBWPUrpcCmHmHpgJ75MGGyAEqo';

export const getVideos = (videos) => {
  let value;
  return {
    type: 'GET_VIDEOS',
    payload: {
      promise: new Promise(
        function (resolve, reject) {
          YTSearch({key: API_KEY, term: videos}, (video) => {
            value = video
            //console.log( value )
            resolve( value )
          });
        }
      )
    }
  }
}
