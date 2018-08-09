import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import Navbar from "./components/navbar/Navbar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Navbar />
      </React.Fragment>
    );
  }
}

export default App;
