export const GET_BOOKS = "GET_BOOK";
export const getBooks = data => {
  return {
    type: GET_BOOKS,
    payload: {
      data
    }
  };
};
