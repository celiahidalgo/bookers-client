import { GET_BOOKS, GET_FILTERED_BOOKS } from "../actions/books-actions";

const initialState = {
};

const booksReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return {
        ...prevState,
        books: action.data.books.books

      };
    // case RECEIVE_BOOKS:
    // return {
    //   ...prevState,
    //   // books: action.data.books.books,
    //   books: JSON.data.children.map(child => child.data)

    // };
    case GET_FILTERED_BOOKS:
      return {
        ...prevState,
        books: action.data.books.books

      };

    default:
      return prevState;
  }
};

export default booksReducer;
