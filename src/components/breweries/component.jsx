import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BreweryList from '../brewery-list';

const propTypes = {
  getBreweries: PropTypes.func.isRequired,
  getCityByPostcode: PropTypes.func.isRequired,
  currentCity: PropTypes.string.isRequired
};

class Breweries extends Component {
  state = {
    postcodeArea: ''
  }

  componentDidMount() {
    const { getBreweries } = this.props;

    getBreweries();
  }

  handleInputChange = (event) => {
    this.setState({
      postcodeArea: event.currentTarget.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { getCityByPostcode } = this.props;
    const { postcodeArea } = this.state;

    getCityByPostcode(postcodeArea);
  }


  render() {
    const { postcodeArea } = this.state;
    const { currentCity } = this.props;

    return (
      <section className="page">
        <h1>Zoek een brouwerij op postcode</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            value={postcodeArea}
            onChange={this.handleInputChange}
            maxLength={4}
            placeholder="1234"
          />
          <button type="submit">zoek</button>
        </form>
        <BreweryList city={currentCity} />
      </section>
    );
  }
}

Breweries.propTypes = propTypes;

export default Breweries;
