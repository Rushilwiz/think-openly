import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import Posts from "./components/Posts";
import Post from "./components/Post";
import Event from "./components/Event";
import Events from "./components/Events";
import Profile from "./components/Profile";
import CreateEvent from "./components/CreateEvent";
import CreatePost from "./components/CreatePost";

import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import ProtectedRoute from "./components/ProtectedRoute.js";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route component={Signup} path="/register" />
          <Route component={Signin} path="/login" />
          <ProtectedRoute component={CreateEvent} path="/createevent" />
          <ProtectedRoute component={CreatePost} path="/createpost" />
          <ProtectedRoute component={Posts} path="/posts" />
          <ProtectedRoute component={Post} path="/post/:id" />
          <ProtectedRoute component={Event} path="/event/:id" />
          <ProtectedRoute component={Events} path="/events" />
          <ProtectedRoute component={Profile} path="/profile" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
