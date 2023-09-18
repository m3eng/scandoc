import React, { Component } from "react";
import "./App.css";
import DVSOIDVC from "@idscan/onboarding";
// import DVSOIDVC from "scandoc-onboarding";
import "scandoc-onboarding/dist/css/onboarding.css";

class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const lib = new DVSOIDVC({
      el: "videoCapturingEl",
      applicantId: "2ec310eb-c816-4114-956e-071f4776c1a9",
      domainId: "c4091080-1c30-4c73-49b7-08dbb14e8517",
      publicKey: "pk_274eb098-b9df-43f5-84d2-d48d389bfc0e",
      chunkPublicPath: "networks",
      domainApi: "https://api-dvsonline.idscan.net",
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