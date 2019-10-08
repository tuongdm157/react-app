import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import TopMenu from "./components/TopMenu";
function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>Product</h2>;
}

export default function App() {
  return (
    <Router>
      <div>
        <TopMenu/>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">Product</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}