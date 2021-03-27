import React, { useState, useEffect } from "react";

const Events = (props) => {
  const [state, setState] = useState({
    user: { username: "" },
    events: [{ id: 1, text: "Green Earth" }],
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
  return (
    <div>
      <h1 className="d-flex justify-content-center m-2 p-4">Events</h1>
      <div className="container">
        <h1>Hello {state.user.username}!</h1>
        {state.events.map((event) => {
          return (
            <div>
              <a href={"/event/" + event.id} class="">
                {event.text}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Events;
