import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

import { FormGroup } from "react-bootstrap";
import { FormLabel } from "react-bootstrap";
import { FormControl } from "react-bootstrap";

let marked = require("marked");

class App extends Component {

state = {
  markdown:""
}
updateMarkDown = function(markdown){
  this.setState({markdown});
}
  render() {
    let {markdown} = this.state;
    console.log(markdown)
    return (
      <div className="App container">
          <FormGroup controlId="formMarkdown">
            <FormLabel><h1>Markdown Input</h1></FormLabel>
            <FormControl as="textarea" rows="10" columns="" className="preview card-body" value={markdown} onChange={(event)=>this.updateMarkDown(event.target.value)}/>
          </FormGroup>
        <div>
          <h1 className=".App-header">Markdown Output</h1>
          <div id="preview-output">
            <div  className="preview-output" dangerouslySetInnerHTML = {{__html:marked(markdown)}} ></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
