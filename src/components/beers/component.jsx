import React, { Component } from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import Beer from '../beer';

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
          {map(beers, beer => <Beer key={beer.name} name={beer.name} />)}
        </section>
      </section>
    );
  }
}

Beers.propTypes = propTypes;

export default Beers;
