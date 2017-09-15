//import callApi from '../../util/apiCaller';

// Export Constants
export const GET_DATA = 'GET_DATA';

// Export Actions
export function getData(post) {
  return {
    type: GET_DATA,
    data:"It's about Mii!)))",
  };
}
export function fetchData() {
    return (dispatch) => {
        return Promise.resolve(dispatch(getData()));
    };
  }
