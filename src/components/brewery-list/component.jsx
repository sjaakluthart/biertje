import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';

const propTypes = {
  breweries: PropTypes.arrayOf(PropTypes.string).isRequired,
  breweriesByCity: PropTypes.arrayOf(PropTypes.string).isRequired,
  city: PropTypes.string.isRequired
};

const BreweryList = ({ breweries, breweriesByCity, city }) => {
  if (isEmpty(breweriesByCity)) {
    return (
      <section>
        <h1>Alle brouwerijen</h1>
        {map(breweries, brewery => <p>{brewery}</p>)}
      </section>
    );
  }

  return (
    <section>
      <h1>
        Brouwerijen in&nbsp;
        {city}
      </h1>
      {map(breweriesByCity, brewery => <p>{brewery}</p>)}
    </section>
  );
};

BreweryList.propTypes = propTypes;

export default BreweryList;
