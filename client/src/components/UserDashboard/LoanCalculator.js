import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './UserDashboard.css';


export default class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            step2: 0.01,
            stepFunction: '',
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
        this.step1Handler = this.step1Handler.bind(this);
        this.step2Handler = this.step2Handler.bind(this);
        this.step1initialState = this.step1initialState.bind(this);
        this.step2initialState = this.step2initialState.bind(this);
    }

    // this is an amortization calculator

    loanCalc(e) {
        e.preventDefault();
        const currentState = this.state;
        let p = this.state.purchaseAmount - this.state.downPayment;
        let y = this.state.loanTerm;
        let i = this.state.interestRate / 100;
        let ei = i / 12; // interest rate divided over 12 months
        let n = y * 12; // number of payments over  term
        let monthlyPayment = p / ((Math.pow((1 + ei), n) - 1) / (ei * Math.pow((1 + ei), n)));
        let totalPayment = monthlyPayment * n;
        let totalInterest = totalPayment - p;

        if (!this.state.purchaseAmount) {
            alert("You must choose a  amout!");

        } else if (!this.state.interestRate) {
            alert('You must choose an interest amount!');

        } else if (!this.state.loanTerm) {
            alert('You must choose a  term!');

        } else {
            currentState.purchaseData.totalPayout = parseInt((totalPayment + parseInt(currentState.downPayment, 10)).toFixed(2), 10);
            currentState.purchaseData.monthlyPayment = parseInt(monthlyPayment.toFixed(2), 10);
            currentState.purchaseData.totalInterest = parseInt(totalInterest.toFixed(2), 10);
            currentState.purchaseData.loanTerm = this.state.loanTerm * 12;
            currentState.purchaseData.downPayment = parseInt(this.state.downPayment, 10);
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

    step1Handler() {
        const crntState = this.state;
        let myStep = setInterval(() => {
            const currentState = this.state;
            currentState.step *= 2; 
            this.setState({currentState});
        }, 200);
        crntState.stepFunction = myStep;
        this.setState({crntState});
    }

    step2Handler() {
        const crntState = this.state;
        let myStep = setInterval(() => {
            const currentState = this.state;
            currentState.step2 *= 2; 
            this.setState({currentState});
        }, 200);
        crntState.stepFunction = myStep;
        this.setState({crntState});
    }

    step1initialState() {
        const currentState = this.state;
        let myStep = currentState.stepFunction;
        clearInterval(myStep);
        currentState.step = 1;
        this.setState({currentState});
    }

    step2initialState() {
        const currentState = this.state;
        let myStep = currentState.stepFunction;
        clearInterval(myStep);
        currentState.step2 = 0.01;
        this.setState({currentState});
    }

    render() {
        return (
            <div>
                <h3>Compare Optional Purchase</h3>

                <form>
                    <label>Purchase Amount</label><br />
                    <input onChange={this.inputHandler} onMouseDown={this.step1Handler} onMouseUp={this.step1initialState} type="number" name="purchaseAmount" step={this.state.step} min="0" /><br /><br />
                    <label>Down Payment</label><br />
                    <input onChange={this.inputHandler} onMouseDown={this.step1Handler} onMouseUp={this.step1initialState} type="number" name="downPayment" min="0" step={this.state.step} /><br /><br />
                    <label>Term of Loan in Years</label><br />
                    <input onChange={this.inputHandler} type="number" name="loanTerm" min="0" /><br /><br />
                    <label>Interest Rate as Percent</label><br />
                    <input onChange={this.inputHandler} onMouseDown={this.step2Handler} onMouseUp={this.step2initialState} type="number" step={this.state.step2} name="interestRate" min="0" /><br /><br />
                    <Button onClick={this.loanCalc} color="info">Submit</Button>
                </form>


                <div className="loanModal">
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>Purchase Info</ModalHeader>
                        <ModalBody>
                            <p className="DataLine">Monthly Payment: <span className="DataVal">${this.state.purchaseData.monthlyPayment}</span></p>
                            <p className="DataLine">Total Interest: <span className="DataVal">${this.state.purchaseData.totalInterest}</span></p>
                            <p className="DataLine">Total Cost over Term: <span className="DataVal">${this.state.purchaseData.totalPayout}</span></p>
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
