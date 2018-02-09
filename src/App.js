import React, { Component } from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import TextTop from "./components/TextTop/TextTop";
class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-1"> </div>
          <div className="col-sm-10">
            <div className="well well-lg">
              <TextTop />
            </div>
            <div className="col-sm-1"> </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

// multiple classes can be referenced using the name of the class
//followed by the other identifiers.  className="text lead text-danger"
