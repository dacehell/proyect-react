import { LIST_USERS_INIT, LIST_USERS_SUCCESS, LIST_USERS_ERROR } from "./types";

export const usersList = () => {
  return (dispatch) => {
    dispatch({ type: LIST_USERS_INIT });

    const usersSuccess = (users) => {    
      dispatch({ type: LIST_USERS_SUCCESS, payload: users });
    };
    const usersFail = (error) => {
      dispatch({ type: LIST_USERS_ERROR, payload: error });
    };
    
    try {
      fetch("https://mock-server-dl.herokuapp.com/users", {
        method: "GET",
        headers: {'Authorization':`Bearer ${localStorage.jwt}`}
      }).then((response)=>{
        return response.json()
      }).then((data)=>{
        if (data){
          usersSuccess(data);
        }
        else
          usersFail(data.error);
      })
    } catch (error) {
      usersFail(error);
    }
  };
};

