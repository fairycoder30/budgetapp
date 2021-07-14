//Create varibles
let monthlyIncome = 0; //Numerical Value
let expenses = []; //Array of objects with name and amount properties
let expenseTotal = 0; //Numerical Value
let balance = 0; //Numerical Value

//Create References to HTML Elements
let monthlyBudget = document.getElementById("monthly_budget") //Paragraph
let incomeInput = document.getElementById("income_input")
let updateBudgetButton = document.getElementById("update_budget_button")

let nameInput = document.getElementById("name_input")
let amountInput = document.getElementById("amount_input")
let addExpenseButton = document.getElementById("add_expense_button")

let expenseList = document.getElementById("expense_list") //Div
let totalExpenses = document.getElementById("total_expenses") // Paragraph
let remainingBalance = document.getElementById("remaining_balance") // Paragraph

//Build a function that  saves the user Input of the monthly  budget form and displays the value in the app
function updateBudget(event) {
    console.log ("updatebudget Fired");
    /*This function will fire when I click the form button.
    It takes and event as an argument; this is an object.*/
    event.preventDefault(); //stops autorefresh
    monthlyIncome = parseInt(incomeInput.value); //this string outputs numerically
    monthlyBudget.innerText = "$" + monthlyIncome;
    //Update
    updateBalance();
}

// Add updateBUdget as onclick handler for update
updateBudgetButton.onclick = updateBudget;

//build a helper function that updates the remaining balance when changes to the budget or expenses occur
function updateBalance() {
    console.log ("Update Balance fired!!!");
    //determine new balance
    balance = monthlyIncome-expenseTotal;
    remainingBalance.innerText = "$" + balance;
    if  (balance < 0) {
    remainingBalance.classList.remove("green");
    remainingBalance.classList.add('red');
    } else {
        remainingBalance.classList.add("green");
        remainingBalance.classList.remove("red");
    }
}

//build a function which saves a new expense to the expenses array
//and displays a new expense in the app
function addExpense(event){
    console.log ("It worked");
    event.preventDefault();
    let newExpense = {
        name: nameInput.value,
        amount: parseInt(amountInput.value)
    }

expenses.push(newExpense);

let newElement = document.createElement("p");
newElement.innerText = newExpense.name + ": $" + newExpense.amount
expenseList.appendChild(newElement);
updateExpenseTotal();
}

addExpenseButton.onclick = addExpense;

//build a helper function that will recalculate the total of the expenses
function updateExpenseTotal() {
console.log ("Woo!!")
expenseTotal = 0;
//Loop through all expense and recalculate total
for (let i = 0; i < expenses.length; i++) {
    let currentExpense = expenses [i];
    expenseTotal = expenseTotal + currentExpense.amount;
}
totalExpenses.innerText ="$" + expenseTotal;
updateBalance();
}