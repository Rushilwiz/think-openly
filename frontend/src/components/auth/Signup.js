import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Signup = (props) => {
  let history = useHistory();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    if (verifyPassword !== password) {
      alert("The passwords don't match!");
      return;
    }
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
        email: email,
        first_name: firstName,
        last_name: lastName,
      }),
    };
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_ENDPOINT}/profile/create`,
        requestOptions
      );
      const data = await response.json();
      console.log(data.username);

      history.push("/login");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-inner">
        <h2>Register</h2>
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
        <div className="form-group">
          <label htmlFor="password">Verify Password:</label>
          <input
            type="password"
            onChange={(e) => {
              setVerifyPassword(e.target.value);
            }}
            value={verifyPassword}
            name="password"
            id="password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Email:</label>
          <input
            type="text"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            name="name"
            id="name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">First Name:</label>
          <input
            type="text"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            value={firstName}
            name="name"
            id="name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Last Name:</label>
          <input
            type="text"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            value={lastName}
            name="name"
            id="name"
          />
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Signup;
