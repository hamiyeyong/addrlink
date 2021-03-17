const SET_PAGE_COUNTS = "SET_PAGE_COUNTS";
const SET_COUNT_PER_PAGE = "SET_COUNT_PER_PAGE";
const SET_PAGE_LINK = "SET_PAGE_LINK";

export const setPageCounts = (currentPage, total) => ({
  type: SET_PAGE_COUNTS,
  currentPage,
  total,
});
export const setCountPerPage = (count) => ({
  type: SET_COUNT_PER_PAGE,
  countPerPage: count,
});
export const setPageLink = (link) => ({
  type: SET_PAGE_LINK,
  link,
});

// 리듀서
const initialState = {
  currentPage: 1,
  total: 0,
  countPerPage: 10,
  link: "",
};
export default function pagination(state = initialState, action) {
  switch (action.type) {
    case SET_PAGE_COUNTS:
      return {
        ...state,
        currentPage: parseInt(action.currentPage),
        total: parseInt(action.total),
      };
    case SET_COUNT_PER_PAGE:
      return {
        ...state,
        countPerPage: action.countPerPage,
      };
    case SET_PAGE_LINK:
      return {
        ...state,
        link: action.link,
      };
    default:
      return state;
  }
}
