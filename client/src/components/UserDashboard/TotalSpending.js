import React, { Component } from 'react';
import { RadialChart } from 'react-vis/dist';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import '../../react-vis.css';
import "./UserDashboard.css";
import '../../App.css';

export default class TotalSpending extends Component {

    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            stepFunction: '',
            transactions: '',
            modal: false,
            home: 0,
            auto: 0,
            misc: 0,
            foodDrink: 0,
            healthcare: 0
        };
        this.toggle = this.toggle.bind(this);
        this.inputHandler = this.inputHandler.bind(this);
        this.stepHandler = this.stepHandler.bind(this);
        this.stepInitialState = this.stepInitialState.bind(this);
    }

    componentDidMount() {
        let transactions = [];
        fetch("/api/transactions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ user_id: localStorage.getItem("user_id") })
        })
            .then(data => data.json())
            .then(response => {
                transactions = response;
                const currentState = this.state;
                currentState.transactions = transactions;
                this.setState({ currentState });
            });
    }

    toggle() {
        const currentState = this.state;
        currentState.modal = !this.state.modal;
        this.setState({ currentState });
    }

    inputHandler(e) {
        const currentState = this.state;
        currentState[e.target.name] = e.target.value;
        this.setState({ currentState });
    }

    stepHandler() {
        const crntState = this.state;
        let myStep = setInterval(() => {
            const currentState = this.state;
            currentState.step *= 2;
            this.setState({ currentState });
        }, 200);
        crntState.stepFunction = myStep;
        this.setState({ crntState });
    }

    stepInitialState() {
        const currentState = this.state;
        let myStep = currentState.stepFunction;
        clearInterval(myStep);
        currentState.step = 1;
        this.setState({ currentState });
    }

    render() {
        let expenses = this.state.transactions || [];
        let home = parseInt(this.state.home, 10);
        let auto = parseInt(this.state.auto, 10);
        let foodDrink = 0;
        let healthcare = 0;
        let misc = 0;
        let total = 0;
        let colors = ['#56CBF9', '#FF220C', '#F038FF', '#32E875', '#FFBD00', '#FF5400', '#FF220C'];
        expenses.map((item, index) => {
            total += item.amount;
            switch (item.category[0]) {
                case 'Bank Fees':
                    misc += item.amount;
                    break;
                case 'Cash Advance':
                    misc += item.amount;
                    break;
                case 'Community':
                    misc += item.amount;
                    break;
                case 'Food and Drink':
                    foodDrink += item.amount;
                    break;
                case 'Healthcare':
                    healthcare += item.amount;
                    break;
                case 'Payment': // this case is left blank intentionally so as to avoid adding home and auto
                    break;
                case 'Recreation':
                    misc += item.amount;
                    break;
                case 'Service':
                    misc += item.amount;
                    break;
                case 'Shops':
                    misc += item.amount;
                    break;
                case 'Tax':
                    misc += item.amount;
                    break;
                case 'Transfer':
                    misc += item.amount;
                    break;
                case 'Travel':
                    misc += item.amount;
                    break;
                default:
                    misc += item.amount;
            } 
            return null;
        });


        let data = [{ angle: home, label: 'Home', color: colors[0] }, { angle: auto, label: 'Auto', color: colors[1] }, { angle: foodDrink, label: 'Food and Drink', color: colors[2] }, { angle: healthcare, label: 'Healthcare', color: colors[3] }, { angle: misc, label: 'Miscellaneous', color: colors[4] }];
        data.forEach((el) => {
            if (el.angle < total / 30) {
                el.label = '';
            }
        });
        return (

            <div className="pieChart">
                <RadialChart
                    data={data[0].angle === '' ? data = [{ angle: 1 }] : data}
                    colorType={'literal'}
                    showLabels={true}
                    labelsRadiusMultiplier={1.25}
                    labelsStyle={{ fontSize: 12 }}
                    radius={120}
                    width={350}
                    height={370} />
                <Button onClick={this.toggle} color="info">Add Expenses</Button>
                <div className="spendingModal">
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>Add Expenses</ModalHeader>
                        <ModalBody>
                            <form>
                                <label>Home Expenses</label><br />
                                <input onChange={this.inputHandler} onMouseDown={this.stepHandler} onMouseUp={this.stepInitialState} type="number" name="home" min="0" step={this.state.step} /><br /><br />
                                <label>Auto Expenses</label><br />
                                <input onChange={this.inputHandler} onMouseDown={this.stepHandler} onMouseUp={this.stepInitialState} type="number" name="auto" min="0" step={this.state.step} />
                            </form>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="info" onClick={this.toggle}>Close</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>

        );

    }
}
