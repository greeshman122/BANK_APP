let balance = 0;

function addTransaction() {
    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);

    if (description && !isNaN(amount)) {
        const transactionList = document.getElementById('transaction-list');
        const transactionItem = document.createElement('li');
        transactionItem.textContent = `${description}: ₹${amount}`;

        if (amount > 0) {
            transactionItem.classList.add('income');
            balance += amount;
        } else {
            transactionItem.classList.add('expense');
            balance += amount; // amount is negative for expenses
        }

        transactionList.appendChild(transactionItem);
        document.getElementById('balance').textContent = `₹${balance.toFixed(2)}`;

        // Clear input fields
        document.getElementById('description').value = '';
        document.getElementById('amount').value = '';
    } else {
        alert('Please enter a valid description and amount.');
    }
}