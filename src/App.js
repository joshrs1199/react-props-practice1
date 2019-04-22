import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header.js"
import image from "./picture/download.jpeg"

class App extends Component {
  render() {
    return <div>
            <Header header="a nice 20 minute nap would be nice right now lmao yea" image={image} />
           </div>
  }
}

export default App;
