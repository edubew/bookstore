const CHECK_STATUS = 'bookstore/categories/checkStatus';

const initialState = [];

export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under Construction';
    default:
      return state;
  }
}

export const checkStatus = () => ({
  type: CHECK_STATUS,
});
