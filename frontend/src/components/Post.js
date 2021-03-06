import React, { useState, useEffect } from "react";


const Post = (props) => {
  const id = props.match.params.id
  const [state, setState] = useState({
    user: { username: "HyperionLegion" },
    post_title: "CLIMATE CHANGE",
    post_text: "We are gonna die if we don't do anything about climate change!",
    upvotes: 2,
    topics: ["climate change", "death"],
    comments: [
      "this guy is weird",
      "no he is right. Climate change is a serious issue today oawtoa jto jwao jwo jwoap rjpwoarj woarj pwoajpfjpoajrpowaj pwoaj pwoa tjpwoa jpoawj posaj poasj pojawp ojwapo jposaj ",
      "factual",
      "Great speech!",
      "really?",
      "wow i didn't know that",
    ],
  });

  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  const callAPI = () => {
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/post/${id}`, requestOptions)
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
  const onComment = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ postid: props.id }),
    };
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/post/comments`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };
  useEffect(() => {
    callAPI();
  }, []);
  return (
    <div className="bg-dark" style={{ minHeight: "100vh" }}>
      <h1
        style={{ backgroundColor: "#F1EAE8", fontFamily: "Impact" }}
        className=" d-flex justify-content-center p-4"
      >
        Post {id}
      </h1>
      <div className="container " style={{ fontFamily: "Courier New" }}>
        <h1 className="text-white">Hello {state.user.username}!</h1>

        <div className="card card-body " style={{ backgroundColor: "#F1EAE8" }}>
          <h1 className="card-title">{state.post_title}</h1>
          <p className="text-left">{state.post_text}</p>
          <h4 className="text-left">Topics:</h4>
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
          <form onSubmit={onSubmit} className="text-left">
            <div id="form-group">
              <input
                className="btn btn-success text-left"
                type="submit"
                value="+1"
              />
            </div>
            <br />
          </form>
          <div className="d-flex">
            <p className="bg-info rounded p-2 text-white">
              {state.upvotes.length()} Likes
            </p>
          </div>
        </div>
        <form onSubmit={onComment}>
          <div id="form-group" className="text-left">
            <textarea
              className="form-control"
              id="comment"
              type="text"
              placeholder="Enter comment here..."
            />
            <input className="btn btn-primary" type="submit" value="Submit" />
          </div>
          <br />
        </form>
        <div className="text-left">
          <h4 className="text-white">Comments:</h4>
          {state.comments.map((comment) => {
            return (
              <div
                className="card card-body"
                style={{ backgroundColor: "#D6D1D0" }}
              >
                <p className="card-text">{comment}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Post;
