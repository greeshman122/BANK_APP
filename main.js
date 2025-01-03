let transactions = [];

function addTransaction() {
    const type = document.getElementById('type').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const description = document.getElementById('description').value;

    if (isNaN(amount) || description.trim() === '') {
        alert('Please enter valid amount and description.');
        return;
    }

    const transaction = { type, amount, description };
    transactions.push(transaction);
    updateUI();
}

function updateUI() {
    const transactionList = document.getElementById('transaction-list');
    transactionList.innerHTML = '';

    let balance = 0;

    transactions.forEach(transaction => {
        const row = document.createElement('tr');
        row.innerHTML = `
                    <td>${transaction.type}</td>
                    <td>${transaction.amount.toFixed(2)}</td>
                    <td>${transaction.description}</td>
                `;
        transactionList.appendChild(row);

        if (transaction.type === 'income') {
            balance += transaction.amount;
        } else {
            balance -= transaction.amount;
        }
    });

    document.getElementById('balance-amount').textContent = `$${balance.toFixed(2)}`;
}