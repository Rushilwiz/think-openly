import React, { useState, useEffect } from "react";

const CreatePost = (props) => {
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
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/createpost`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div
      className="bg-dark"
      style={{ minHeight: "100vh", fontFamily: "Courier New" }}
    >
      <div
        className="container card card-body text-left "
        style={{ backgroundColor: "#F1EAE8" }}
      >
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <h1 className="form-title" style={{ fontFamily: "Impact" }}>
              Create Post
            </h1>
            <label className="" for="title">
              Post Title:{" "}
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="form-control d-flex"
              placeholder="Enter title here..."
            ></input>
          </div>
          <div class="form-group">
            <label className="" for="title">
              Post:
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
    </div>
  );
};

export default CreatePost;
