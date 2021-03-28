import React, { useState, useEffect } from "react";

const Posts = (props) => {
  const [state, setState] = useState({
    user: { username: "" },
    posts: [
      {
        id: 1,
        upvotes: 2,
        text: "Action for Climate Change",
        comments: 0,
        topics: ["climate change", "air pollution"],
      },
    ],
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
  const maybePluralize = (count, noun, suffix = "s") =>
    `${count} ${noun}${count !== 1 ? suffix : ""}`;
  return (
    <div className="bg-dark" style={{ minHeight: "100vh" }}>
      <h1
        className="d-flex justify-content-center p-4"
        style={{ backgroundColor: "#F1EAE8", fontFamily: "Impact" }}
      >
        Posts
      </h1>
      <a
        className="btn btn-large btn-success"
        href="/createpost"
        style={{ fontFamily: "Courier New" }}
      >
        Create Post
      </a>
      <div className="container" style={{ fontFamily: "Courier New" }}>
        <br></br>
        <h1 className="text-white">Hello {state.user.username}!</h1>
        {state.posts.map((post, el) => {
          let background;
          if (el % 2 == 0) {
            background = "#F1EAE8";
          } else {
            background = "#FFFFFF";
          }
          return (
            <div
              className="card card-body text-left"
              style={{ backgroundColor: background }}
            >
              <a href={"/post/" + post.id} className="card-title">
                {post.text}
              </a>
              <p className="text-success">+{post.upvotes}</p>
              <p className="text-warning">
                {maybePluralize(post.comments, "comment")}
              </p>
              <div className="d-flex">
                {post.topics.map((topic) => {
                  return (
                    <div
                      className="text-left mr-3 p-2 d-inline-block"
                      style={{ backgroundColor: "#D6D1D0" }}
                    >
                      <p>{topic}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
