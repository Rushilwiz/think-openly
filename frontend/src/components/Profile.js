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
        {state.topics.map((topic) => {
          return (
            <div>
              <p>{topic}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Profile;
