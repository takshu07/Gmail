import React from "react";
import { Route, Router } from "react-router-dom";

function index() {
  return (
    <div>
      <Router>
        {/* <Route path="/mail">
          <Mail />
        </Route>
        <Route path="/">
          <EmailList />
        </Route> */}
      </Router>
    </div>
  );
}

export default index;
