import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import { NavBar, Header, Footer } from "./components/elements";

import { Home, Skills, Projects, NotFound } from "./components/pages";
import "./App.css";

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <NavBar />
        <main className="homes">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/skills" component={Skills} />
            <Route path="/projects" component={Projects} />
            <Route path="/" component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
