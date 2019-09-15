export const GET_BOOKS = "GET_BOOK";
export const GET_FILTERED_BOOKS = "GET_FILTERED_BOOKS";
export const getBooks = data => {
  return {
    type: GET_BOOKS,
    data

  };
};
export const getFilteredBooks = data => {
  return {
    type: GET_FILTERED_BOOKS,
    data

  };
};
