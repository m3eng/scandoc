import React, { Component, useEffect } from "react";
import ScanWrap from "scandoc-onboarding";
import "scandoc-onboarding/dist/css/onboarding.css";

function Mobile() {
  useEffect(() => {
    const lib = new ScanWrap({
      el: "videoCapturingEl",
      domainApi: process.env.REACT_APP_DOMAIN_API,
      customerKey: process.env.REACT_APP_CUSTOMER_KEY,
      domainId: process.env.REACT_APP_DOMAIN_ID,
      publicKey: process.env.REACT_APP_PUBLIC_KEY,
      configApi: process.env.REACT_APP_CONFIG_API,
    });
  });
  return (
    <div className="App">
      <div id="videoCapturingEl"></div>
    </div>
  );
}

export default Mobile;
