//import callApi from '../../util/apiCaller';

// Export Constants
export const GET_DATA = 'GET_DATA';

// Export Actions
export function getData(post) {
  return {
    type: GET_DATA,
    data:"Mii is here!!!)))",
  };
}

export function fetchData() {
    return (dispatch) => {
        return Promise.resolve(dispatch(getData()));
    };
  }
