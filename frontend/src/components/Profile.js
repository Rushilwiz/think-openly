import React, { useState, useEffect } from "react";

const Profile = (props) => {
  const [state, setState] = useState({
    user: { username: "" },
    topics: ["climate change", "covid19"],
  });
  const [stocks, setStocks] = useState([]);

  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  const callAPI = () => {
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/profile/`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data !== undefined) {
          setState(data);
        }
      });
  };

  useEffect(() => {
    callAPI();
  }, []);
  return (
    <div>
      <h1 className="d-flex justify-content-center m-2 p-4">Profile</h1>
      <div className="container">
        <h1>Hello {state.user.username}!</h1>
        <h2>Topics you are interested in:</h2>
        <div className="d-flex">
          {state.topics.map((topic) => {
            return (
              <div
                className="text-left m-2 p-1 d-inline-block"
                style={{ backgroundColor: "#D6D1D0" }}
              >
                <p>{topic}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Profile;
