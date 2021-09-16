import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { userLogin } from "../../store/login/actions";

export const LoginForm = ({ isLoading }) => {
  let loadingUsers = useSelector((state) => state.users.loadingUsers);
  const history = useHistory();
  const [form, setForm] = useState({
    username: "",
    password: "",
    email2: "email2",
  });
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const target = event.target;
    setForm({
      ...form,
      [target.name]: target.value,
    });
  };

  const cb = () => history.push("/users");

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(userLogin(form, cb));
  };

  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
      <div className="card">
        <input
          id="username"
          name="username"
          className="form-control username"
          placeholder="username"
          onChange={handleInputChange}
          value={form.username}
        />
      </div>
      <div className="card">
        <input
          name="email"
          className="form-control email d-none"
          placeholder="email2"
          onChange={handleInputChange}
          value={form.email2}
        />
      </div>
      <div className="card">
        <input
          id="password"
          name="password"
          className="form-control"
          placeholder="Password"
          type="password"
          onChange={handleInputChange}
          value={form.password}
        />
      </div>
      <div className="card">
        <button
          id="buttonSubmit"
          className="btn btn-primary"
          color="primary"
          disabled={loadingUsers}
          type="submit"
        >
          {loadingUsers ? "Loading..." : "Submite"}
        </button>
      </div>
    </form>
  );
};
