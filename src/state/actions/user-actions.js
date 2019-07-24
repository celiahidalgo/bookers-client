export const POST_USER = "POST_USER";
export const GET_USER = "GET_USER";
export const getUser = (user, logged) => {
  return {
    type: POST_USER,
    payload: {
      user
    },
    type: GET_USER,
    payload: {
      user,
      status: logged
    }
  };
};
