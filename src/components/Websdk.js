import React, { useEffect } from "react";
import ScanWrap from "@idscan/onboarding";
import "@idscan/onboarding/dist/css/onboarding.css";

function Websdk() {
  useEffect(() => {
    const lib = new ScanWrap({
      el: "videoCapturingEl",
      applicantId : "6496bcc6-62fd-4064-9bd9-7f1895411ced",
      domainApi: "https://api-dvsonline.idscan.net",
      domainId: "45345883-9368-4bab-e8c9-08dbc43ec1fd",
      publicKey: "pk_93d3442d-251e-4a31-93e0-17b7099b3c6f",
    });
  });
  return (
    <div className="App">
      <div id="videoCapturingEl"></div>
    </div>
  );
}

export default Websdk;
