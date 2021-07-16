import transactions from './data/transactions.js';
import transactionHistory from './data/transactions.js';

console.log(transactionHistory);


const makeTransactionTableRowMarkup = transaction => {
    const { id, amount, date, business, name, type, account } = transaction;

    return `
    <tr>
    <td>${id}</td>
    <td>${amount}</td>
    <td>${date}</td>
    <td>${business}</td>
    <td>${name}</td>
    <td>${type}</td>
    <td>${account}</td>
    </tr>
    `
};

const tableEl = document.querySelector('.js-transaction-table');

const transactionTableRowsMarkup = transactionHistory
.map(makeTransactionTableRowMarkup).join('');

tableEl.insertAdjacentHTML('beforeend', transactionTableRowsMarkup);