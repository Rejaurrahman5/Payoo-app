 document.getElementById("cashout-btn").addEventListener("click", function() {

 const agentNumberInput = document.getElementById("cashout-number");
 const agentInput = agentNumberInput.value;
 console.log(agentInput);
 if(agentInput.length != 11) {
    alert("invalid agent number")
    return;

 }

 const amountElementInput = document.getElementById("cashout-amount");
 const amountElement = amountElementInput.value;
 console.log(amountElement);

    const balanceElementInput = document.getElementById("balance");
    const balanceElement = balanceElementInput.innerText;
    console.log(balanceElement);

    const newbalance = Number(balanceElement) - Number(amountElement);
    console.log(newbalance);

     if(newbalance < 0) {
        alert("Invalid amount")
        return;
    }
 
    const pinElementInput = document.getElementById("cashout-pin");
    const pinElement = pinElementInput.value;
    if(pinElement === "1234"){
        alert("Cashout Successfull")
        balanceElementInput.innerText = newbalance;
        return;
    }
    else {
        alert("invalid pin")
        
    }
 })
    // 1. get the agent number & validate
  

    // 2. get the amount, validate, convert to number
 
    // 3. get the current balance, validate, convert to number
   

    // 4. calculate the new balance
   
    // 5.get the pin and verify
   
    // 5.1true:: show an alart > set balance
    // 5.2 true:: show an error alart > return
