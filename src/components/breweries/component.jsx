import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  getBreweries: PropTypes.func.isRequired,
  getCityByPostcode: PropTypes.func.isRequired
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

    return (
      <section className="page">
        <form onSubmit={this.handleSubmit}>
          <input
            value={postcodeArea}
            onChange={this.handleInputChange}
            maxLength={4}
            placeholder="1234"
          />
          <button type="submit">
            Zoek brouwerijen
          </button>
        </form>
      </section>
    );
  }
}

Breweries.propTypes = propTypes;

export default Breweries;
