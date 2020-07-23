import React from "react";
import { Route } from "react-router-dom";
import Home from "./pages/home/home";

const Hats = () => (
  <div>
    <h1>Hats page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/hats" component={Hats} />
      <Route exact path="/topics/:topicId" component={Hats} />
    </div>
  );
}

export default App;
