import React, { useState, useEffect } from "react";

const Events = (props) => {
  const [state, setState] = useState({
    user: { username: "HyperionLegion" },
    events: [
      {
        id: 1,
        upvotes: 0,
        text: "Green Earth",
        comments: 1,
        topics: [
          "climate change",
          "global warming",
          "earth",
          "green environment",
        ],
      },
      {
        id: 2,
        upvotes: 352,
        text: "Walk for Gun Control",
        comments: 53,
        topics: ["gun control", "legislation"],
      },
      {
        id: 3,
        upvotes: 1,
        text: "Rights for Gays",
        comments: 0,
        topics: ["LGBTQ", "policy"],
      },
      {
        id: 4,
        upvotes: 3,
        text: "Black Lives Matter",
        comments: 4,
        topics: ["racial justice"],
      },
      {
        id: 5,
        upvotes: 24,
        text: "Ending COVID-19",
        comments: 12,
        topics: ["health", "covid19"],
      },
    ],
  });
  const [stocks, setStocks] = useState([]);

  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  const callAPI = () => {
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/events/`, requestOptions)
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
        Events
      </h1>
      <a
        className="btn btn-large btn-success"
        href="/createevent"
        style={{ fontFamily: "Courier New" }}
      >
        Create Event
      </a>
      <div className="container" style={{ fontFamily: "Courier New" }}>
        <br></br>

        <h1 className="text-white">Hello {state.user.username}!</h1>
        {state.events.map((event, el) => {
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
              <a className="card-title" href={"/event/" + event.id}>
                {event.text}
              </a>
              <p className="text-success">+{event.upvotes}</p>
              <p className="text-warning">
                {maybePluralize(event.comments, "comment")}
              </p>
              <div className="d-flex">
                {event.topics.map((topic) => {
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

export default Events;
