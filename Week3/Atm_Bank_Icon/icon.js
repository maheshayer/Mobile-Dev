// Initial Balance and PIN
let bankBalance = 10000;
const correctPIN = "1234";

// Track balance visibility
let balanceVisible = false;

// Current action
let currentAction = "";

// Update Balance
function updateBalance() {

    if (balanceVisible) {
        $("#balance").text(bankBalance);
    }
    else {
        $("#balance").text("******");
    }
}

// Show Message
function showMessage(text, color) {

    $("#message").text(text);
    $("#message").css("color", color);
}

// Validate Amount
function validateAmount(amount) {

    if (amount <= 0 || isNaN(amount)) {
        showMessage("Enter valid amount!", "red");
        return false;
    }

    if (amount % 100 !== 0) {
        showMessage("Amount must be multiple of 100!", "red");
        return false;
    }

    return true;
}

// Withdraw Function
function withdrawMoney() {

    let amount = Number($("#amount").val());

    if (!validateAmount(amount)) {
        return;
    }

    let pin = prompt("Enter PIN:");

    if (pin !== correctPIN) {
        showMessage("Incorrect PIN!", "red");
        return;
    }

    if (amount > bankBalance) {
        showMessage("Insufficient Balance!", "red");
        return;
    }

    bankBalance -= amount;

    updateBalance();

    showMessage("Withdrawal Successful!", "green");

    $("#amount").val("");
}

// Deposit Function
function depositMoney() {

    let amount = Number($("#amount").val());

    if (!validateAmount(amount)) {
        return;
    }

    let pin = prompt("Enter PIN:");

    if (pin !== correctPIN) {
        showMessage("Incorrect PIN!", "red");
        return;
    }

    bankBalance += amount;

    updateBalance();

    showMessage("Deposit Successful!", "green");

    $("#amount").val("");
}

// jQuery Code
$(document).ready(function () {

    // Toggle Balance Visibility
    $("#toggleBalance").click(function () {

        balanceVisible = !balanceVisible;

        updateBalance();

        // Change Eye Icon
        if (balanceVisible) {

            $(this)
            .removeClass("fa-eye-slash")
            .addClass("fa-eye");

        }
        else {

            $(this)
            .removeClass("fa-eye")
            .addClass("fa-eye-slash");
        }
    });

    // Withdraw Button Click
    $("#withdrawBtn").click(function () {

        currentAction = "withdraw";

        $("#amount").slideDown();
        $("#amount").focus();

        withdrawMoney();
    });

    // Deposit Button Click
    $("#depositBtn").click(function () {

        currentAction = "deposit";

        $("#amount").slideDown();
        $("#amount").focus();

        depositMoney();
    });

});