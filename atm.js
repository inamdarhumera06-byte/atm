// =============================
// ATM Simulation in JavaScript
// =============================

const correctPin = "1234";
let balance = 5000;
let transactions = [];

// PIN Authentication
function login() {
    let attempts = 3;

    while (attempts > 0) {
        let pin = prompt("Enter your 4-digit PIN:");

        if (pin === correctPin) {
            alert("Login Successful!");
            return true;
        }

        attempts--;
        alert(`Incorrect PIN! Attempts left: ${attempts}`);
    }

    alert("Account Locked!");
    return false;
}

// Check Balance
function checkBalance() {
    alert(`Current Balance: ₹${balance}`);
}

// Deposit Money
function depositMoney() {
    let amount = Number(prompt("Enter amount to deposit:"));

    if (amount > 0) {
        balance += amount;
        transactions.push(`Deposited ₹${amount}`);
        alert(`₹${amount} deposited successfully.`);
    } else {
        alert("Invalid amount!");
    }
}

// Withdraw Money
function withdrawMoney() {
    let amount = Number(prompt("Enter amount to withdraw:"));

    if (amount <= 0) {
        alert("Invalid amount!");
    } else if (amount > balance) {
        alert("Insufficient Balance!");
    } else {
        balance -= amount;
        transactions.push(`Withdrawn ₹${amount}`);
        alert(`Please collect your cash.\nRemaining Balance: ₹${balance}`);
    }
}

// Transaction History
function transactionHistory() {
    if (transactions.length === 0) {
        alert("No transactions found.");
        return;
    }

    let history = "Transaction History\n\n";

    for (let i = 0; i < transactions.length; i++) {
        history += `${i + 1}. ${transactions[i]}\n`;
    }

    alert(history);
}

// ATM Menu
function atmMenu() {

    while (true) {

        let choice = prompt(
`========= ATM MENU =========

1. Check Balance
2. Deposit Money
3. Withdraw Money
4. Transaction History
5. Exit

Enter your choice:`
        );

        switch (choice) {
            case "1":
                checkBalance();
                break;

            case "2":
                depositMoney();
                break;

            case "3":
                withdrawMoney();
                break;

            case "4":
                transactionHistory();
                break;

            case "5":
                alert("Thank you for using our ATM.");
                return;

            default:
                alert("Invalid Choice!");
        }
    }
}

// Start Program
if (login()) {
    atmMenu();
}