// export default States;
import React from 'react';
import './States.css';

/**
 * Define States, a React componment of CS142 project #4 problem #2.  The model
 * data for this view (the state names) is available
 * at window.cs142models.statesModel().
 */
class States extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      substring: '',
    }
    console.log('window.cs142models.statesModel()', window.cs142models.statesModel());
  }

  handleFilterChange = (e) => {
    this.setState({substring: e.target.value})
  }

  render() {
    var results = window.cs142models.statesModel().filter(
      (state) => state.toLowerCase().includes(this.state.substring.toLowerCase())).map(
        (state) => <div key={state}> {state} </div>);
  
    return (
      <div className="container">
          <h3>Result:</h3>
        <div id="list">
          <div className = "listItem">
            {results.length == 0 ? `олдсонгүй` : results}
          </div>
        </div>
        <h2>Search:&quot;{`${this.state.substring}`}&quot;</h2>
        <input id="Input" type="text" 
          value={this.state.substring} 
          onChange={event => this.handleFilterChange(event)} />
      </div>
    );
  }
}

export default States;
