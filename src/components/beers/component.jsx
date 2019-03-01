import React, { Component } from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import classNames from 'classnames';
import BeerIcon from '../beer-icon';

const propTypes = {
  beers: PropTypes.objectOf(PropTypes.object).isRequired,
  styles: PropTypes.arrayOf(PropTypes.string).isRequired,
  getBeers: PropTypes.func.isRequired
};

class Beers extends Component {
  componentDidMount() {
    const { getBeers } = this.props;

    getBeers();
  }

  render() {
    const { beers, styles } = this.props;

    return (
      <section className="page">
        <h1>Bieren</h1>
        <section className="styles">
          {map(styles, style => (
            <section
              className={style}
              key={style}
            >
              {style}
            </section>
          ))}
        </section>
        <section>
          {map(beers, beer => (
            <section key={beer.name} className={classNames('beer', beer.style)}>
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
          ))}
        </section>
      </section>
    );
  }
}

Beers.propTypes = propTypes;

export default Beers;
