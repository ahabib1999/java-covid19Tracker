import React, { Fragment } from "react";
import data from "../data/counties-states-data.json";

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
  } 

  returnStatesList = () => {
    const statesList = [];

    for (let [key, value] of Object.entries(data)) {
      statesList.push(`${key}`);
    }


    return statesList.map((currentState, selectedState) => {
      if (selectedState == "") {
        return <option key = "Select State" value = "Select State">Select State</option>
      }

      return (
        <option key={currentState} value={currentState}>
          {currentState}
        </option>
      );
    });
  };


  displayCountiesList = (countiesList) => {
    if (countiesList.length == 0 || this.props.selectedCounty == "") {
      return <option>Select County</option>
    }
    return countiesList.map((county) => {
      return (
        <option key = {county} value = {county}>
          {county}
        </option>
      )
    })
  }

  render() {
    return (
      <Fragment>
        <div className="ui item" style={{ minWidth: 300 }}>
          <select
            value={this.props.selectedState}
            onChange={this.props.onStateChange}
            className="ui fluid search dropdown"
          >
            {this.returnStatesList()}
          </select>
        </div>
        <div className="ui item" style={{ minWidth: 300 }}>
          <select id = "county"
            value={this.props.selectedCounty}
            onChange={this.props.onCountyChange}
            className="ui fluid search dropdown" >
              {this.displayCountiesList(this.props.countiesList)}
          </select>
        </div>
      </Fragment>
    );
  }
}

export default SearchBar;
