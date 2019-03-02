import React, { Component } from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import BeerList from '../beer-list';

const propTypes = {
  beers: PropTypes.arrayOf(PropTypes.string).isRequired,
  styles: PropTypes.arrayOf(PropTypes.string).isRequired,
  getBeers: PropTypes.func.isRequired
};

class Beers extends Component {
  componentDidMount() {
    const { getBeers } = this.props;

    getBeers();
  }

  render() {
    const { styles } = this.props;

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
        <BeerList />
      </section>
    );
  }
}

Beers.propTypes = propTypes;

export default Beers;
