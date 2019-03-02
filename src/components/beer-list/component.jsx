import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import Beer from '../beer';

const propTypes = {
  beers: PropTypes.arrayOf(PropTypes.string).isRequired
};

const BeerList = ({ beers, beersByStyle }) => {
  return (
    <section>
      {map(beers, beer => <Beer key={beer} name={beer} />)}
    </section>
  );
};

BeerList.propTypes = propTypes;

export default BeerList;
