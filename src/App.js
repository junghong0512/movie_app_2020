import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Navigation from "./component/Navigation";

function App() {
  return (
    <HashRouter>
      <Navigation></Navigation>
      <Route path="/about" component={About}></Route>
      <Route path="/" exact={true} component={Home}></Route>
    </HashRouter>
  );
}

export default App;
