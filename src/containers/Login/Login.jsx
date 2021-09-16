import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { userLoginSelector } from "../../store/login/selectors";
import { LoginForm } from "../login-form/LoginForm";

export const Login = () => {
  let users = useSelector(state=>state.users);
  let loading = useSelector(state=>state.users.loading);
  
  let loginUser = useSelector(state=>state.login.data);
  let loginLoading = useSelector(state=>state.login.loading);
  

  if (users.data && Object.keys(users.data).length > 0) {
    return (
      <div className="card">
        <p id="log-success">
          Logged in as <b>{loginUser}</b>
        </p>
      </div>
    );
  }

  const isError = users.error;
  return (
    loginLoading ? "loading" :
    <div className="row">
      <div className="col-md-6 offset-md-3 mt-5">
        <LoginForm isLoading={loading} />
        {isError && (
          <div className="card">
            <p id="paragraph">
              <b>Error: </b> {users.error}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
