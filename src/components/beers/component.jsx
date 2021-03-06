import React, { Component } from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import union from 'lodash/union';
import includes from 'lodash/includes';
import without from 'lodash/without';
import classNames from 'classnames';
import BeerList from '../beer-list';

const propTypes = {
  styles: PropTypes.arrayOf(PropTypes.string).isRequired,
  getBeers: PropTypes.func.isRequired
};

class Beers extends Component {
  state = {
    activeStyles: []
  }

  componentDidMount() {
    const { getBeers } = this.props;

    getBeers();
  }

  handleStyleClick = (style) => {
    const { activeStyles } = this.state;

    if (includes(activeStyles, style)) {
      return this.setState({
        activeStyles: without(activeStyles, style)
      });
    }

    return this.setState({
      activeStyles: union(activeStyles, [style])
    });
  }

  render() {
    const { styles } = this.props;
    const { activeStyles } = this.state;

    return (
      <section className="page">
        <section className="styles">
          {map(styles, style => (
            <section
              className={classNames(style, { active: includes(activeStyles, style) })}
              key={style}
              onClick={() => this.handleStyleClick(style)}
            >
              <span>{style}</span>
            </section>
          ))}
        </section>
        <BeerList styles={activeStyles} />
      </section>
    );
  }
}

Beers.propTypes = propTypes;

export default Beers;
