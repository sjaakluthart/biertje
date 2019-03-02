import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';
import Beer from '../beer';

const propTypes = {
  beers: PropTypes.arrayOf(PropTypes.string).isRequired,
  beersByStyle: PropTypes.arrayOf(PropTypes.string).isRequired
};

const BeerList = ({ beers, beersByStyle }) => {
  if (isEmpty(beersByStyle)) {
    return (
      <section>
        {map(beers, beer => <Beer key={beer} name={beer} />)}
      </section>
    );
  }

  return (
    <section>
      {map(beersByStyle, beer => <Beer key={beer} name={beer} />)}
    </section>
  );
};

BeerList.propTypes = propTypes;

export default BeerList;
