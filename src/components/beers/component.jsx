import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    return (
      <section>
        <h1>Bieren</h1>
      </section>
    );
  }
}

Beers.propTypes = propTypes;

export default Beers;
