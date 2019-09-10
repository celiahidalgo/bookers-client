import { GET_BOOKS } from "../actions/books-actions";

const initialState = {
};

const booksReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return {
        ...prevState,
        books: action.payload.data.allBooks.books

      };


    default:
      return prevState;
  }
};

export default booksReducer;
