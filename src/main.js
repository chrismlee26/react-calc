import React, { Component } from 'react'

class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
      bill: 10.00,
      tip: 10  

    }
  }

  render() {
    const amount = this.state.bill * this.state.tip / 100;

    return (
      <div>
        <h1>{amount} + {this.state.bill} = { parseFloat(amount) + parseFloat(this.state.bill) }</h1>

        <label> bill
          <input value={this.state.bill}
          onChange = { (e) => {this.setState( {bill: e.target.value } ) } }
        />
        </label>

        <label> tip
          <input value={this.state.tip}
          onChange = { (e) => {this.setState( {bill: e.target.value } ) } }
        />
        </label>
      </div>
    )
  }
}

export default Main