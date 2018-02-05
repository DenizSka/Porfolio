import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import { NavBar, Header, Footer } from "./components/elements";

import { Home, Skills, People, NotFound } from "./components/pages";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
    };
  }

  async componentDidMount() {
    const peopleUrls = [
      "https://swapi.co/api/people/1/",
      "https://swapi.co/api/people/2/",
      "https://swapi.co/api/people/3/",
      "https://swapi.co/api/people/4/",
      "https://swapi.co/api/people/5/",
    ];
    const peopleResponses = await Promise.all(
      peopleUrls.map(personUrl => fetch(personUrl))
    );
    const people = await Promise.all(
      peopleResponses.map(personResponse => personResponse.json())
    );
    this.setState({ people });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <NavBar />
        <main className="home">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/skills" component={Skills} />
            <Route
              path="/projects"
              render={props => <People {...props} people={this.state.people} />}
            />
            <Route path="/" component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
