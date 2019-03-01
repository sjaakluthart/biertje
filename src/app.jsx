import React, { Component } from 'react';
import Header from './components/header';
import Beers from './components/beers';

class App extends Component {
  render() {
    return (
      <section className="main">
        <Header />
        <Beers />
      </section>
    );
  }
}

export default App;
