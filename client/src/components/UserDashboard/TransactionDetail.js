import React, { Component } from 'react';
import { Table } from 'reactstrap';


class TransactionDetail extends Component {
    constructor(props) {
        super();
        this.state = {
            transactions: ''
        };
    }

    componentDidMount() {
        fetch("/api/transactions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ user_id: localStorage.getItem("user_id") })
        })
            .then(data => data.json())
            .then(response => {
                const currentState = this.state;
                currentState.transactions = response;
                this.setState({ currentState });
            });
            
    }

    render() {
        const transactions = this.state.transactions || [];
        const tableRowArray = [];
        transactions.forEach((el) => {
            let tableRow = 
            <tr key={el.transaction_id}>
                <th scope="row">{el.date}</th>
                <td>{el.category[0]}</td>
                <td>{el.category[1]}</td>
                <td>${el.amount.toFixed(2)}</td>
            </tr>;
            tableRowArray.push(tableRow);
        });
        
        return (
            <div className="transDetailChart">
                <Table hover>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Category</th>
                            <th>Detail</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableRowArray}
                    </tbody>
                </Table>

            </div>

            // <div>
            //     <h2>TransactionDetail Section</h2>
            // </div>
        );
    }
}

export default TransactionDetail;
