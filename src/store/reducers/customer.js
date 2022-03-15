const initialState = {
    customers:[]
  };
  
  const customerReducer = (state = initialState, action) => {
    const { type, payload } = action;
    
    console.log(payload)
    switch (type) {
      case "FETCH_USERS_SUCSES":
        return {
          ...state,
          customers:payload
        };
  
      default:
        return state;
    }
  };
  
  export default customerReducer;