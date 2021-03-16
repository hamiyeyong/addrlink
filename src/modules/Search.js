const SET_SEARCH_RESULTS = "SET_SEARCH_RESULTS";

// 액션 생성함수
export const setResults = (data) => ({
  type: SET_SEARCH_RESULTS,
  data,
});

// 초기상태
const initialState = {
  data: [],
};
// 리듀서
export default function search(state = initialState, action) {
  switch (action.type) {
    case SET_SEARCH_RESULTS:
      return {
        data: action.data,
      };
    default:
      return state;
  }
}
