import React from 'react';
import PropTypes from 'prop-types';
import join from 'lodash/join';
import location from '../../assets/images/location.svg';
import clock from '../../assets/images/clock.svg';

const propTypes = {
  brewery: PropTypes.shape({
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
    open: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired
};

const getGoogleMapsUrl = (brewery) => {
  const query = encodeURIComponent(`${brewery.name} ${brewery.address} ${brewery.zipcode} ${brewery.city}`);

  return `https://www.google.com/maps/search/?api=1&query=${query}`;
};

const Brewery = ({ brewery }) => (
  <section className="brewery">
    <header>
      <h1>{brewery.name}</h1>
      <p>
        <a href={getGoogleMapsUrl(brewery)} target="_blank" rel="noreferrer noopener">
          <img src={location} alt="location" />
          {brewery.address}
          &nbsp;
          {brewery.zipcode}
          &nbsp;
          {brewery.city}
        </a>
      </p>
      <p>
        <img src={clock} alt="clock" />
        {join(brewery.open, ', ')}
      </p>
    </header>
  </section>
);

Brewery.propTypes = propTypes;

export default Brewery;
