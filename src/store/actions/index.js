
const USER_TYPE = 'USER_TYPE'


export const HandleUser = (user) => {

    return {
      type: USER_TYPE,
      payload: user,
    };

};