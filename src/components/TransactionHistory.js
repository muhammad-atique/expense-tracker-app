import React from 'react';

export const TransactionHistory = () => {
    return (
        <div>
            <h3>Transaction History</h3>
            <ul className="list">
                <li className="plus">
                    Project 1 income
                    <span>$1000</span>
                    <button className="delete-btn">x</button>
                </li>
                <li className="minus">
                    Project 1 Salaries
                    <span>-$500</span>
                    <button className="delete-btn">x</button>
                </li>
            </ul>
        </div>
    )
}