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

import "bootstrap/dist/css/bootstrap.min.css";
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
