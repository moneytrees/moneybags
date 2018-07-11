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
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
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
