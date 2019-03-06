import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  getBreweries: PropTypes.func.isRequired
};

class Breweries extends Component {
  componentDidMount() {
    const { getBreweries } = this.props;

    getBreweries();
  }

  render() {
    return (
      <section className="page">
        <h1>Brouwerijen</h1>
      </section>
    );
  }
}

Breweries.propTypes = propTypes;

export default Breweries;
