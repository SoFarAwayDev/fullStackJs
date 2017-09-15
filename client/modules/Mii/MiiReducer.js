import { GET_DATA } from './MiiActions';

// Initial State
const initialState = { data: "" };

const MiiReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA :
      return {
        data: action.data,
      };
    default:
      return state;
  }
};

// Export Reducer
export default MiiReducer;
