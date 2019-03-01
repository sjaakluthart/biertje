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
    console.log(styles);

    return (
      <section className="page">
        <h1>Bieren</h1>
        <section>
          {map(beers, beer => (
            <section key={beer.name} className={classNames('beer', beer.style)}>
              <h1>{beer.name}</h1>
              <p>{beer.style}</p>
              <BeerIcon />
            </section>
          ))}
        </section>
      </section>
    );
  }
}

Beers.propTypes = propTypes;

export default Beers;
