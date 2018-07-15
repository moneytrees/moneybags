import React, { Component } from 'react';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './UserDashboard.css';


export default class LoanCalculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            purchaseAmount: '',
            downPayment: '',
            loanTerm: '',
            interestRate: '',
            purchaseData: {
                totalPayout: '',
                monthlyPayment: '',
                totalInterest: '',
                loanTerm: '',
                downPayment: '',
                submit: false
            }
        };
        this.loanCalc = this.loanCalc.bind(this);
        this.inputHandler = this.inputHandler.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    // this is an amortization calculator

    loanCalc(e) {
        e.preventDefault();
        const currentState = this.state;
        let p = this.state.purchaseAmount - this.state.downPayment;
        let y = this.state.loanTerm;
        let i = this.state.interestRate / 100;
        let ei = i / 12; // interest rate divided over 12 months
        let n = y * 12; // number of payments over loan term
        let monthlyPayment = p / ((Math.pow((1 + ei), n) - 1) / (ei * Math.pow((1 + ei), n)));
        let totalPayment = monthlyPayment * n;
        let totalInterest = totalPayment - p;

        if (!this.state.purchaseAmount) {
            alert("You must choose a loan amout!");

        } else if (!this.state.interestRate) {
            alert('You must choose an interest amount!');

        } else if (!this.state.loanTerm) {
            alert('You must choose a loan term!');

        } else {
            currentState.purchaseData.totalPayout = parseInt((totalPayment + parseInt(currentState.downPayment)).toFixed(2));
            currentState.purchaseData.monthlyPayment = parseInt(monthlyPayment.toFixed(2));
            currentState.purchaseData.totalInterest = parseInt(totalInterest.toFixed(2));
            currentState.purchaseData.loanTerm = this.state.loanTerm * 12;
            currentState.purchaseData.downPayment = parseInt(this.state.downPayment);
            currentState.purchaseData.submit = true;
            this.setState({ currentState });
            this.props.purchaseData(this.state.purchaseData);
            this.toggle();
        }
    }

    inputHandler(e) {
        const currentState = this.state;
        currentState[e.target.name] = e.target.value;
        this.setState({ currentState });
    }

    toggle() {
        const currentState = this.state;
        currentState.modal = !this.state.modal;
        this.setState({ currentState });
    }

    render() {
        return (
            <div>
                <h3>Compare Optional Purchase</h3>

                <form>
                    <label>Purchase Amount</label><br />
                    <input onChange={this.inputHandler} type="number" name="purchaseAmount" /><br /><br />
                    <label>Down Payment</label><br />
                    <input onChange={this.inputHandler} type="number" name="downPayment" /><br /><br />
                    <label>Term of Loan in Years</label><br />
                    <input onChange={this.inputHandler} type="number" name="loanTerm" /><br /><br />
                    <label>Interest Rate as Percent</label><br />
                    <input onChange={this.inputHandler} type="number" step="0.1" name="interestRate" /><br /><br />
                    <Button onClick={this.loanCalc} color="info">Submit</Button>
                </form>


                <div className="loanModal">
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>Purchase Info</ModalHeader>
                        <ModalBody>
                            <p className="loanDataLine">Monthly Payment: <span className="loanDataVal">${this.state.purchaseData.monthlyPayment}</span></p>
                            <p className="loanDataLine">Total Interest: <span className="loanDataVal">${this.state.purchaseData.totalInterest}</span></p>
                            <p className="loanDataLine">Total Cost over Term: <span className="loanDataVal">${this.state.purchaseData.totalPayout}</span></p>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.toggle}>OK</Button>
                            <Button color="info" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        )
    }
}
