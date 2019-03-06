import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  getBreweries: PropTypes.func.isRequired,
  getCityByPostcode: PropTypes.func.isRequired
};

class Breweries extends Component {
  componentDidMount() {
    const { getBreweries, getCityByPostcode } = this.props;

    getBreweries();
    getCityByPostcode('2023');
  }

  render() {
    return (
      <section className="page">
        <h1>Brouwerijen komen hiero</h1>
      </section>
    );
  }
}

Breweries.propTypes = propTypes;

export default Breweries;
