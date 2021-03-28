import React, { useState, useEffect } from "react";

const Event = (props) => {
  const [state, setState] = useState({
    user: { username: "HyperionLegion" },
    event_title: "Green Earth",
    upvotes: 0,
    event_text: "Plant trees with us at 2859258 drive 9 pm EST 3/26/2021",
    topics: ["climate change", "global warming"],
    website: "https://joshuahsueh.ml/",
    comments: ["WOW! What a cool event!"],
  });
  const [stocks, setStocks] = useState([]);

  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  const callAPI = () => {
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/event/`, requestOptions)
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
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/event/upvote`, requestOptions)
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
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/eventcomment`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="bg-dark" style={{ minHeight: "100vh" }}>
      <h1
        className="d-flex justify-content-center p-4"
        style={{ fontFamily: "Impact", backgroundColor: "#F1EAE8" }}
      >
        Event {props.match.params.id}
      </h1>
      <div className="container" style={{ fontFamily: "Courier New" }}>
        <h1 className="text-white">Hello {state.user.username}!</h1>

        <div className="card card-body " style={{ backgroundColor: "#F1EAE8" }}>
          <h1 className="card-title">Event: {state.event_title}</h1>
          <a className="" href={state.website}>
            Website
          </a>
          <p className="card-text text-left">{state.event_text}</p>

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
              <input className="btn btn-success" type="submit" value="+1" />
            </div>
            <br />
          </form>
          <div className="d-flex">
            <p className="bg-info rounded p-2 text-white">
              {state.upvotes} Likes
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

export default Event;
