import React, { useState } from 'react';

export const AddTransaction = () => {
    const [description, setDescription] = useState();
    const [transactionAmount, settransactionAmount] = useState();


    return (
        <div>
            <h3>Add New Transaction</h3>
            <form action="">
                <div className="form-control">
                    <label htmlFor="description">Description</label>
                    <input type="text"
                        id="description"
                        placeholder="Enter Details of Transaction"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className="form-control">
                    <label htmlFor="transactionAmount">Transaction Amount</label>
                    <input type="number"
                        id="transactionAmount"
                        placeholder="Enter Transaction Amount"
                        value={transactionAmount}
                        onChange={(e) => settransactionAmount(e.target.value)} />
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </div>
    )
}