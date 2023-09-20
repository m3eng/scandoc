import React, { Component } from "react";
import "./App.css";
import SCANWRAP from "scandoc-onboarding";
import "scandoc-onboarding/dist/css/onboarding.css";

class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const lib = new SCANWRAP({
      el: "videoCapturingEl",

      domainApi: process.env.REACT_APP_DOMAIN_API,
      customerKey: process.env.REACT_APP_CUSTOMER_KEY,
    });
  }

  render() {
    return (
      <div>
        <h1>IDVC2</h1>
        <div id="videoCapturingEl"></div>
      </div>
    );
  }
}

export default App;
