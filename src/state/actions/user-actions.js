export const GET_USER = "GET_USER";
export const getUser = (data) => {
  return {
    type: GET_USER,
    payload: {
      data
    },

  };
};
export const ADD_FAVORITE = "ADD_FAVORITE";
export const actionFav = data => ({
  type: ADD_FAVORITE,
  payload: {
    data
  }
});
export const DELETE_FAVORITE = "DELETE_FAVORITE";
export const deleteFav = data => ({
  type: DELETE_FAVORITE,
  payload: {
    data
  }
});

export const GET_FAVORITE = "GET_FAVORITE";
export const getFav = data => ({
  type: ADD_FAVORITE,
  payload: {
    data
  }
});
