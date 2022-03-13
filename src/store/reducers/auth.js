const initialState = {
  isLogIN: false,
  role: "",
  username: "",
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "USER_LOGIN":
      return {
        ...state,
        isLogIN: true,
        role: payload.role,
        username: payload.role,
      };

    case "USER_LOGOUT":
      return {
        ...state,
        isLogIN: false,
        role: "",
        username: "",
      };

    default:
      return state;
  }
};

export default userReducer;
