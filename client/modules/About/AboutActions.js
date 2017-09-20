//import callApi from '../../util/apiCaller';

// Export Constants
export const GET_DATA = 'GET_DATA';

// Export Actions
export function getData() {
  return {
    type: GET_DATA,
    data:"It's about Mii!)))",
  };
}
export function fetchData() {
    return (dispatch) => {
        /*eslint-disable no-undef*/
        return Promise.resolve(dispatch(getData()));
        /*eslint-disable no-undef*/
    };
  }
