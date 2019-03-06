import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';
import Brewery from '../brewery';

const propTypes = {
  breweries: PropTypes.arrayOf(PropTypes.string).isRequired,
  breweriesByCity: PropTypes.arrayOf(PropTypes.string).isRequired,
  city: PropTypes.string.isRequired
};

const BreweryList = ({ breweries, breweriesByCity, city }) => {
  if (isEmpty(breweriesByCity)) {
    return (
      <section>
        {map(breweries, brewery => <Brewery name={brewery} key={brewery} />)}
      </section>
    );
  }

  return (
    <section>
      <h1>
        Brouwerijen in&nbsp;
        {city}
      </h1>
      {map(breweriesByCity, brewery => <Brewery name={brewery} key={brewery} />)}
    </section>
  );
};

BreweryList.propTypes = propTypes;

export default BreweryList;
