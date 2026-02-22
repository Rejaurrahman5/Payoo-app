document.getElementById("Add-money-btn").addEventListener("click", function() {
    //1. bank account get 
    const bankAccount = getValueFromInput("add-money-bank");
    // console.log(bankAccount);
    if(bankAccount === "Select a Bank"){
        alert("please select a bank");
        return;
    }

    // 2. get bank account number
    const accno = getValueFromInput("add-money-number");
    if(accno.length != 11) {
        alert("invalid accout number");
        return;
    }

    // 3. get amount
    const amount = getValueFromInput("add-money-amount");

    const newbalance = getBalance() + Number(amount);
    console.log('newbalance', newbalance);

    const pin = getValueFromInput("add-money-pin");
    if(pin === "1234") {
    alert(`Add Money Success from 
        ${bankAccount} at ${new Date()}`);
        setBalance(newbalance);
        //1. history-container ke soriye niye asbo
        const history = document.getElementById("history-container");
        
        //2. new div innerHTML add korbo
        const newHistory = document.createElement("div");
        //3. history container ke shore niye asbo
        newHistory.innerHTML = `
        <div class="transaction-card transaction-card p-5 bg-base-100">
           Add Money Success from 
        ${bankAccount} ,acc-no ${accno} at ${new Date()} 
        </div>
            `;
        history.appendChild(newHistory);
    }
    else {
        alert("Invalid pin");
        return;
    }
})