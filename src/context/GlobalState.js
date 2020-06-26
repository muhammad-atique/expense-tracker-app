import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
// Create the initail state

const initialState = {
    transactions: []
}

// Create Global Context
export const GlobalContext = createContext(initialState);

// Create a provider for the Global Context
export const GlobalProvider = ({ children }) => {


    const [state, dispatch] = useReducer(AppReducer, initialState);
    // Actions for Transactions
    // Delete Existing Transaction Action
    function delTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }
    // Add New Transaction Action
    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }


    return (
        <GlobalContext.Provider value={
            {
                transactions: state.transactions,
                delTransaction,
                addTransaction
            }
        }>
            {children}
        </GlobalContext.Provider>
    );
}
