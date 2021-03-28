import React, { useState, useEffect } from "react";

const CreateEvent = (props) => {
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
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/createevent`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div
      className="container card card-body text-left"
      style={{ backgroundColor: "#F1EAE8" }}
    >
      <form onSubmit={onSubmit}>
        <h1>Create Event</h1>
        <div className="form-group">
          <label className="" for="title">
            Event Title:{" "}
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="form-control d-flex"
            placeholder="Enter title here..."
          ></input>
        </div>
        <div className="form-group">
          <label className="" for="title">
            Event Website:
          </label>
          <input
            type="text"
            id="link"
            name="link"
            className="form-control d-flex"
            placeholder="Enter link here..."
          ></input>
        </div>
        <div class="form-group">
          <label className="" for="title">
            Event Description:
          </label>
          <textarea
            type="text"
            id="post-text"
            name="post-text"
            style={{ height: "400px" }}
            className="form-control"
            placeholder="Enter text here..."
          ></textarea>
        </div>
        <input
          className="btn btn-success text-left"
          type="submit"
          value="Submit"
        />
        <br />
      </form>
    </div>
  );
};

export default CreateEvent;
