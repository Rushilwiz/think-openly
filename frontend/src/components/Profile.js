import React, { useState, useEffect } from "react";

const Post = (props) => {
  const [state, setState] = useState({
    user: { username: "" },
    upvotes: 0,
    keywords: [],
  });
  const [stocks, setStocks] = useState([]);

  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  const callAPI = () => {
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/post/`, requestOptions)
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
      </div>
    </div>
  );
};

export default Post;
