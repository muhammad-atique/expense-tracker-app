import React from 'react';

export const Transaction = ({ transaction }) => {
    return (
        <li className="plus">
            {transaction.description}
            <span>{transaction.transactionAmount}</span>
            <button className="delete-btn">x</button>
        </li>
    )
}
//  1.05.57
// 1.02.46