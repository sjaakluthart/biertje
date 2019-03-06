import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  brewery: PropTypes.shape({
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
    open: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired
};

const Brewery = ({ brewery }) => (
  <section className="brewery">
    <header>
      <h1>{brewery.name}</h1>
      <h2>
        {brewery.address}
        &nbsp;
        {brewery.zipcode}
        &nbsp;
        {brewery.city}
      </h2>
    </header>
  </section>
);

Brewery.propTypes = propTypes;

export default Brewery;
