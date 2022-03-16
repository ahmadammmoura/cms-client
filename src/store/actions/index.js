import axios from '../../APIs/Axios'
import { config } from '../../components/auth/config';
const USER_TYPE = 'USER_LOGIN'
const USER_LOGOUT = 'USER_LOGOUT'
const FETCH_USERS_SUCSES = 'FETCH_USERS_SUCSES'


export const HandleUser = (user) => {
    
    return {
      type: USER_TYPE,
      payload: user,
    };

};

export const handleLogOut = (user) => {

  return {
    type: USER_LOGOUT,
    payload: user,
  };

};

export const fetchUsersSucses = (users) => {

  return {
    type: FETCH_USERS_SUCSES,
    payload: users,
  };

};






export const fetchComplaint = () => {


  return (dispatch)=>{
    
    axios.get("/admin/costumers", config)
    .then(response => {
      const users = response.data
      
      dispatch(fetchUsersSucses(users))
    })
    .catch(err => {
      const message =err.message
      console.log(message)
    })

    
  }

};