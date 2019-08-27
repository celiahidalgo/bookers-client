export const GET_BOOKS = "GET_BOOK";
export const getBooks = data => {
  return {
    type: GET_BOOKS,
    payload: {
      data
    }
  };
};

export const ADD_FAVORITE = "ADD_FAVORITE";
export const actionFav = data => ({
  type: ADD_FAVORITE,
  payload: {
    data
  }
});
