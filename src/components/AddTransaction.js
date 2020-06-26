import React, { useState, useContext } from 'react';
// Importing the Global state
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
    const [description, setDescription] = useState('');
    const [transactionAmount, settransactionAmount] = useState('');
    const { addTransaction } = useContext(GlobalContext);
    const onSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
            id: new Date().getTime(),
            description,
            transactionAmount: +transactionAmount
        }
        addTransaction(newTransaction);
    }

    return (
        <div>
            <h3>Add New Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="description">Description</label>
                    <input type="text"
                        id="description"
                        placeholder="Enter Details of Transaction"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required="required" />
                </div>
                <div className="form-control">
                    <label htmlFor="transactionAmount">Transaction Amount</label>
                    <input type="number"
                        id="transactionAmount"
                        placeholder="Enter Transaction Amount"
                        value={transactionAmount}
                        onChange={(e) => settransactionAmount(e.target.value)}
                        required="required" />
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </div>
    )
}