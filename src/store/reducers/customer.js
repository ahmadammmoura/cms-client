const initialState = {
    complaint:[]
  };
  
  const userReducer = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case "NEW_COMPLAINT":
        return {
          ...state,
          isLogIN: true,
          role: payload.role,
          username: payload.role,
        };
  
      default:
        return state;
    }
  };
  
  export default userReducer;