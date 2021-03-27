import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Signup = (props) => {
  let history = useHistory();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: username, password: password }),
    };
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_ENDPOINT}/token/`,
        requestOptions
      );
      const data = await response.json();

      localStorage.setItem("token", data.access);
      localStorage.setItem("refresh", data.refresh);
      history.push("/");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-inner">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="name">Username:</label>
          <input
            type="text"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            value={username}
            name="name"
            id="name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            name="password"
            id="password"
          />
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Signup;
