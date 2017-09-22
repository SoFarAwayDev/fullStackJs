import callApi from '../../apiCaller';

// Export Constants
export const GET_DATA = 'GET_DATA';

export function getData(pageData) {
  return {
    type: GET_DATA,
    data: pageData,
  };
}

export function fetchData() {
    return (dispatch) => {
        return callApi('data', 'post', {
            pageName: "aboutPage"
        }).then(res => dispatch(getData(res.pageData.text)));

    };
  }




