import { POST_USER } from "../actions/user-actions";
import { GET_USER } from "../actions/user-actions";

const initialState = {
  user: [{}]
};

const userReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case POST_USER:
      const newUser = prevState.user.map(user => {
        if (user.googleId === action.payload.user.profileObj.googleId) {
          return { ...user, logged: action.payload.logged };
        }
        console.log("user");
        return {
          ...user
        };
      });

      return newUser;

    case GET_USER:
      const googleUser = prevState.user.map(user => {
        if (user.googleId === action.payload.user.profileObj.googleId) {
          return { ...user };
        }
        console.log("user");
        return {
          ...user,
          username: action.payload.user.profileObj.givenName,
          email: action.payload.user.profileObj.email,
          password: action.payload.user.profileObj.imageUrl
        };
      });

      return googleUser;

    default:
      return {
        ...prevState
      };
  }
};

export default userReducer;
