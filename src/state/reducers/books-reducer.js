import { GET_BOOKS } from "../actions/books-actions";
import { ADD_FAVORITE } from "../actions/books-actions";

const initialState = {
};

const booksReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return {
        ...prevState,
        books: action.payload.data.allBooks.books
      };
    case ADD_FAVORITE:
      return {
        ...prevState,
        books: [{ favorite: true }]
      };

    default:
      return prevState;
  }
};

export default booksReducer;
