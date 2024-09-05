let balance = 0;

// Load initial balance from local storage
const storedBalance = localStorage.getItem('balance');
if (storedBalance !== null) {
    balance = parseFloat(storedBalance);
    console
    console.log("Loaded balance from local storage:", balance);
} else {
    console.log("No balance found in local storage");
}

function updateBalance() {
    document.getElementById('balance').textContent = balance.toFixed(2);
    // Save the updated balance to local storage
    localStorage.setItem('balance', balance);
}

     //function updateBalance() {
     // document.getElementById('balance').textContent = balance.toFixed(2);
    //}

    function deposit() {
      const amount = parseFloat(document.getElementById('depositAmount').value);
      if (isNaN(amount)) {
        showMessage('Please enter a valid number for the deposit amount.');
      } else if (amount <= 0) {
        showMessage('Deposit amount must be greater than zero.');
      } else {
        balance += amount;
        updateBalance();
        document.getElementById('depositAmount').value = '';
        showMessage('Deposit successful!');
      }
    }

    function withdraw() {
      const amount = parseFloat(document.getElementById('withdrawAmount').value);
      if (isNaN(amount)) {
        showMessage('Please enter a valid number for the withdrawal amount.');
      } else if (amount <= 0) {
        showMessage('Withdrawal amount must be greater than zero.');
      } else if (amount > balance) {
        //alert('Insufficient funds. Your balance is ' + balance.toFixed(2));
      showMessage(`Insufficient funds, your balance is  ${balance.toFixed(2)} `);
      } else {
        balance -= amount;
        updateBalance();
        document.getElementById('withdrawAmount').value = '';
        showMessage('Withdrawal successful!');
      }
    }

    function checkBalance() {
      showMessage(`Your current balance is:    ${balance.toFixed(2)}`);
    }

    function showMessage(message) {
      const transactionResult = document.getElementById('transactionResult');
      transactionResult.textContent = message;
      setTimeout(() => {
        transactionResult.textContent = '';
      }, 2000); // Clear message after 2 seconds
    }
