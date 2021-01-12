import React from 'react';
import TransItem from './TransItem'
import { Table } from 'reactstrap'

class TransactionList extends React.Component {
    
    transList = () => {
        return this.props.transactions.map(trans => <TransItem key={trans.transaction_id} account_id={trans.account_id} amount={trans.amount} category={trans.category} date={trans.date} name={trans.name} payment_channel={trans.payment_channel} />)
    }
    
    render() {
        console.log(this.props)
        return(
            <>
            {this.props.transactions === null ? "" :
            <Table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Category</th>
                        <th>Subcategory</th>
                        <th>Description</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                {this.transList()}
            </Table>}
            </>
        )
    }   
}

export default TransactionList