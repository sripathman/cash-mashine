let balance = 0;

    function updateBalance() {
      document.getElementById('balance').textContent = balance.toFixed(2);
    }

    function deposit() {
      const amount = parseFloat(document.getElementById('depositAmount').value);
      if (isNaN(amount)) {
        alert('Please enter a valid number for the deposit amount.');
      } else if (amount <= 0) {
        alert('Deposit amount must be greater than zero.');
      } else {
        balance += amount;
        updateBalance();
        document.getElementById('depositAmount').value = '';
        showSuccessMessage('Deposit successful!');
      }
    }

    function withdraw() {
      const amount = parseFloat(document.getElementById('withdrawAmount').value);
      if (isNaN(amount)) {
        alert('Please enter a valid number for the withdrawal amount.');
      } else if (amount <= 0) {
        alert('Withdrawal amount must be greater than zero.');
      } else if (amount > balance) {
        alert('Insufficient funds. Your balance is ' + balance.toFixed(2));
      } else {
        balance -= amount;
        updateBalance();
        document.getElementById('withdrawAmount').value = '';
        showSuccessMessage('Withdrawal successful!');
      }
    }

    function checkBalance() {
      alert('Your current balance is: ' + balance.toFixed(2));
    }

    function showSuccessMessage(message) {
      const transactionResult = document.getElementById('transactionResult');
      transactionResult.textContent = message;
      setTimeout(() => {
        transactionResult.textContent = '';
      }, 2000); // Clear message after 2 seconds
    }
