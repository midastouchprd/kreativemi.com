import React, { Component } from "react";
import "./App.css";
import FrontPage from "./FrontPage";
import MusicPage from "./MusicPage";
import ArtPage from "./ArtPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path={`/`} component={FrontPage} />
            <Route exact path={`/music`} component={MusicPage} />
            <Route exact path={`/art`} component={ArtPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
