import React, { Component } from 'react';
import Header from './components/header';
import Beers from './components/beers';
import Breweries from './components/breweries';

class App extends Component {
  state = {
    activeTab: 'breweries'
  }

  render() {
    return (
      <section className="main">
        <Header />
        <Breweries />
        <Beers />
      </section>
    );
  }
}

export default App;
