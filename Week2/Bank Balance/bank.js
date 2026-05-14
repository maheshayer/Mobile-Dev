// Initial Balance and PIN
let bankBalance = 10000;
const correctPIN = "1234";

// Update Balance on Screen
function updateBalance() {
    document.getElementById("balance").innerText = bankBalance;
}

// Show Message
function showMessage(text, color) {
    const message = document.getElementById("message");

    message.innerText = text;
    message.style.color = color;
}

// Validate Amount
function validateAmount(amount) {

    // Invalid Amount
    if (amount <= 0 || isNaN(amount)) {
        showMessage("Enter a valid amount!", "red");
        return false;
    }

    // Must be multiple of 100
    if (amount % 100 !== 0) {
        showMessage("Amount must be multiple of 100!", "red");
        return false;
    }

    return true;
}

// Withdraw Function
function withdrawMoney() {

    let amount = Number(document.getElementById("amount").value);

    // Validation
    if (!validateAmount(amount)) {
        return;
    }

    // Ask for PIN
    let pin = prompt("Enter PIN:");

    // Wrong PIN
    if (pin !== correctPIN) {
        showMessage("Incorrect PIN!", "red");
        return;
    }

    // Check Balance
    if (amount > bankBalance) {
        showMessage("Insufficient Balance!", "red");
        return;
    }

    // Deduct Balance
    bankBalance -= amount;

    // Update UI
    updateBalance();

    showMessage("Withdrawal Successful!", "green");

    // Clear Input
    document.getElementById("amount").value = "";
}

// Deposit Function
function depositMoney() {

    let amount = Number(document.getElementById("amount").value);

    // Validation
    if (!validateAmount(amount)) {
        return;
    }

    // Ask for PIN
    let pin = prompt("Enter PIN:");

    // Wrong PIN
    if (pin !== correctPIN) {
        showMessage("Incorrect PIN!", "red");
        return;
    }

    // Add Balance
    bankBalance += amount;

    // Update UI
    updateBalance();

    showMessage("Deposit Successful!", "green");

    // Clear Input
    document.getElementById("amount").value = "";
}