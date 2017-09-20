
// Export Constants
export const GET_DATA = 'GET_DATA';

// Export Actions
export function getData() {
  return {
    type: GET_DATA,
    data:"Mii is here=)))) Phase 3",
  };
}

export function fetchData() {
    return (dispatch) => {
        /*eslint-disable no-undef*/
        return Promise.resolve(dispatch(getData()));
        /*eslint-disable no-undef*/
    };
  }
