import { GET_USER, ADD_FAVORITE, DELETE_FAVORITE, GET_FAVORITE } from "../actions/user-actions";

const initialState = {
};


// const initialState = {
// };

const userReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...prevState,
        username: action.payload.data.user.user.username,
        email: action.payload.data.user.user.email,
        picture: action.payload.data.user.user.picture,
        favorites: action.payload.data.user.user.favorites
      };
    case ADD_FAVORITE:
      return {
        ...prevState,
        favorites: action.payload.data.user.favorites
      }
    case DELETE_FAVORITE:
      return {
        ...prevState,
        favorites: action.payload.data.user.favorites
      }
    case GET_FAVORITE:
      return {
        ...prevState,
        favorites: action.payload.data.user.favorites

      }
    default:
      return prevState;
  }

};
export default userReducer;


// const userReducer = (prevState = initialState, action) => {
//   switch (action.type) {
//     case POST_USER:
//       const newUser = prevState.user.map(user => {
//         if (user.googleId === action.payload.user.profileObj.googleId) {
//           return { ...user, logged: action.payload.logged };
//         }
//         console.log("user");
//         return {
//           ...user
//         };
//       });

//       return newUser;

//     case GET_USER:
//       const googleUser = prevState.user.map(user => {
//         if (user.googleId === action.payload.user.profileObj.googleId) {
//           return { ...user };
//         }
//         console.log("user");
//         return {
//           ...user,
//           username: action.payload.user.profileObj.givenName,
//           email: action.payload.user.profileObj.email,
//           password: action.payload.user.profileObj.imageUrl
//         };
//       });

//       return googleUser;

//     default:
//       return {
//         ...prevState
//       };
//   }
// };

// export default userReducer;
