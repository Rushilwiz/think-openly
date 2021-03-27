import React, { useState, useEffect } from "react";

const Post = (props) => {
  const [state, setState] = useState({
    user: { username: "HyperionLegion" },
    post_title: "CLIMATE CHANGE",
    post_text: "We are gonna die if we don't do anything about climate change!",
    upvotes: 0,
    topics: ["climate change", "death"],
    comments: ["this guy is weird", "no he is right"],
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
  const onSubmit = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ postid: props.id }),
    };
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/post/upvote`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };
  useEffect(() => {
    callAPI();
  }, []);
  return (
    <div>
      <h1 className="d-flex justify-content-center m-2 p-4">Post</h1>
      <div className="container">
        <h1>Hello {state.user.username}!</h1>
        <h2>Post {props.match.params.id}</h2>
        <h2>{state.post_title}</h2>
        <p>{state.post_text}</p>
        <form onSubmit={onSubmit}>
          <div id="form-group">
            <input className="btn btn-primary" type="submit" value="+1" />
          </div>
          <br />
        </form>
        <h4>Topics:</h4>
        {state.topics.map((topic) => {
          return (
            <div class="inline">
              <p>{topic}</p>
            </div>
          );
        })}
        <h4>Comments:</h4>
        {state.comments.map((comment) => {
          return (
            <div>
              <p>{comment}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Post;
