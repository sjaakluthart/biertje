import React, { Component } from 'react';

class Beers extends Component {
  componentDidMount() {
    console.log('get the beers!');
  }

  render() {
    return (
      <section>
        <h1>Bieren</h1>
      </section>
    );
  }
}

export default Beers;
