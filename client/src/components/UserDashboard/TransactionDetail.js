import React, { Component } from 'react';
import { Table } from 'reactstrap';


class TransactionDetail extends Component {
    render() {
        return (
            <div>
                <Table hover>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Name</th>
                            <th>Transaction</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">3/31/2018</th>
                            <td>Neiman Marcus</td>
                            <td>Valentino</td>
                            <td>$895</td>
                        </tr>
                        <tr>
                            <th scope="row">5/20/2018</th>
                            <td>Macy's</td>
                            <td>Watch</td>
                            <td>$100</td>
                        </tr>
                        <tr>
                            <th scope="row">6/20/2018</th>
                            <td>Chuy's</td>
                            <td>Food</td>
                            <td>$20</td>
                        </tr>
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
