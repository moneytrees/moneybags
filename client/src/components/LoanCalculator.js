import React, { Component } from 'react'

export default class LoanCalculator extends Component {
  render() {

    // this is an amortization calculator

    function calculate(principal, interest, term, ) {
        let p = principal.value;
        let y = term.value;
        let i = interest.value / 100;
        let ei = i / 12; // interest rate divided over 12 months
        let n = y * 12; // number of payments over loan term
        let monthlyPayment = p / ((Math.pow((1 + ei), n) - 1) / (ei * Math.pow((1 + ei), n)));
        let totalPayment = monthlyPayment * n;
        let totalInterest = totalPayment - p;
    
        if (!loanAmount.value) {
            alert("You must choose a loan amout!");
            
        } else if (!interest.value) {
            alert('You must choose an interest amount!');
    
        } else if (!years.value) {
            alert('You must choose a loan term!');
    
        } else {
            totalPmt.value = totalPayment.toFixed(2);
            monthlyPmt.value = monthlyPayment.toFixed(2);
            totalInt.value = totalInterest.toFixed(2);
        }
    }
    return (
      <div>
        
      </div>
    )
  }
}
