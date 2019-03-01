import React, { Component } from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';

const propTypes = {
  beers: PropTypes.objectOf(PropTypes.object).isRequired,
  getBeers: PropTypes.func.isRequired
};

class Beers extends Component {
  componentDidMount() {
    const { getBeers } = this.props;

    console.log('get the beers!');
    getBeers();
  }

  render() {
    const { beers } = this.props;

    return (
      <section>
        <h1>Bieren</h1>
        <section>
          {map(beers, beer => (
            <section key={beer.name}>
              <h1>{beer.name}</h1>
              <p>{beer.style}</p>
            </section>
          ))}
        </section>
      </section>
    );
  }
}

Beers.propTypes = propTypes;

export default Beers;
