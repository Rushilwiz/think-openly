import React, { useState, useEffect } from "react";

const Event = (props) => {
  const [state, setState] = useState({
    user: { username: "HyperionLegion" },
    event_title: "Green Earth",
    event_text: "Plant trees with us at 2859258 drive 9 pm EST 3/26/2021",
    topics: ["climate change", "global warming"],
    website: "https://joshuahsueh.ml/",
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
  return (
    <div>
      <h1 className="d-flex justify-content-center m-2 p-4">
        Event {props.match.params.id}
      </h1>
      <div className="container">
        <h1>Hello {state.user.username}!</h1>
        <h1>Event {state.event_title}</h1>
        <p>{state.event_text}</p>
        <a href={state.website}>Website</a>
        <h2>Tags:</h2>
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

export default Event;
