import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import BeerIcon from '../beer-icon';

const propTypes = {
  beer: PropTypes.shape({
    name: PropTypes.string.isRequired,
    style: PropTypes.string.isRequired,
    brewery: PropTypes.string.isRequired,
    alcohol: PropTypes.number.isRequired,
    keg: PropTypes.string.isRequired,
    volume: PropTypes.number.isRequired
  }).isRequired
};

const Beer = ({ beer }) => (
  <section className={classNames('beer', beer.style)}>
    <div>
      <header>
        <h1>{beer.name}</h1><span>-</span><h2>{beer.brewery}</h2>
      </header>
      <section>
        <p>Alcohol: {beer.alcohol}%</p>
        <p>Fust: {beer.keg}, {beer.volume} liter</p>
      </section>
    </div>
    <div className="style-icon">
      <BeerIcon />
      <p>{beer.style}</p>
    </div>
  </section>
);

Beer.propTypes = propTypes;

export default Beer;
