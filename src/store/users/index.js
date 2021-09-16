import { LIST_USERS_INIT, LIST_USERS_SUCCESS, LIST_USERS_ERROR } from "./types";
const initialStore = {
  data: [],
  error: null,
  success: null,
  loadingUsers: false,
};


export const usersReducer = (prevState = initialStore, action) => {
  switch (action.type) {
    case LIST_USERS_INIT:
      return {...prevState,
        loadingUsers: true,
      };
    case LIST_USERS_SUCCESS:
      return {...prevState, 
        data: action.payload,
        error: false,
        success: true,
        loadingUsers: false,
      };
    case LIST_USERS_ERROR:
      return {...prevState,
        error: action.payload,
        success: false,
        loadingUsers: false,
      };
    default:
      return prevState;
  }
};
