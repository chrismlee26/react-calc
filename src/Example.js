import React, { Component } from 'react'

class Example extends Component {
  constructor(props) {
    super(props)

    this.state = {
      bill: 10.00,
      tip: 15,
      split: 1,
    }
  }

  render() {
    const tipAmount = this.state.bill * this.state.tip / 100;
    const totalAmount = this.state.bill + tipAmount;
    const tipSplit = tipAmount / this.state.split;
    const totalSplit = totalAmount / this.state.split;
    return (
      <div>
        <h1>Tip Calculator 5000</h1>
        <label> Bill:
          <input 
            type="number"
            value={this.state.bill}
            onChange={ (e) => { this.setState( { bill: parseFloat(e.target.value) } ) } }
          />
        </label>
        <label> Tip %:
          <input 
            type="number"
            value={this.state.tip}
            onChange={ (e) => { this.setState( { tip: parseFloat(e.target.value) } ) } }
          />
        </label>
        <label> Split:
          <input 
            type="number"
            min="1"
            value={this.state.split}
            onChange={ (e) => { this.setState( { split: parseInt(e.target.value) } ) } }
          />
        </label>
        <h2 className="totals">Tip Total: $ {tipAmount.toFixed(2)}</h2>
        <h2 className="totals">Tip Per Person: $ {tipSplit.toFixed(2)}</h2>
        <h2 className="totals">Total: $ {totalAmount.toFixed(2)}</h2>
        <h2 className="totals">Total Per Person: $ {totalSplit.toFixed(2)}</h2>
      </div>
    )
  }
}

export default Example