import React from 'react';

export const AddTransaction = () => {
    return (
        <div>
            <h3>Add New Transaction</h3>
            <form action="">
                <div className="form-control">
                    <label htmlFor="description">Description</label>
                    <input type="text" id="description" placeholder="Enter Details of Transaction" />
                </div>
                <div className="form-control">
                    <label htmlFor="transactionAmount">Transaction Amount</label>
                    <input type="number" id="transactionAmount" placeholder="Enter Transaction Amount" />
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </div>
    )
}