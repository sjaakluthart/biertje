import React, { Component } from 'react';
import classNames from 'classnames';
import Header from './components/header';
import Beers from './components/beers';
import Breweries from './components/breweries';

class App extends Component {
  state = {
    activeTab: 'breweries'
  }

  navigate = (tab) => {
    this.setState({
      activeTab: tab
    });
  }

  render() {
    const { activeTab } = this.state;

    return (
      <section className="main">
        <Header />
        <section className="app">
          <header>
            <h1
              onClick={() => this.navigate('breweries')}
              className={classNames({ active: activeTab === 'breweries' })}
            >
              Brouwerijen
            </h1>
            <h1
              onClick={() => this.navigate('beers')}
              className={classNames({ active: activeTab === 'beers' })}
            >
              Bieren
            </h1>
          </header>
          {
            activeTab === 'breweries'
              ? <Breweries />
              : <Beers />
          }
        </section>
      </section>
    );
  }
}

export default App;
