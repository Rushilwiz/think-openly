import React, { useState, useEffect } from "react";

const Posts = (props) => {
  const [state, setState] = useState({
    user: { username: "" },
    posts: [{ id: 1, text: "monkeys" }],
  });

  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  const callAPI = () => {
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/posts/`, requestOptions)
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
      <h1 className="d-flex justify-content-center m-2 p-4">Posts</h1>
      <div className="container">
        <h1>Hello {state.user.username}!</h1>
        {state.posts.map((post) => {
          return (
            <div>
              <a href={"/post/" + post.id} class="">
                {post.text}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
