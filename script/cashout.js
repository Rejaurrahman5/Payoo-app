 document.getElementById("cashout-btn").addEventListener("click", function() {
   // 1. get the agent number & validate
   const cashoutNumber = getValueFromInput("cashout-number");
   if(cashoutNumber.length !== 11) {
      alert("invalid agent number")
   }
   // console.log(cashoutNumber);

    // 2. get the amount, validate, convert to number
    const cashoutAmount = getValueFromInput("cashout-amount")
 
     // 3. get the current balance, validate, convert to number
      // const balanceElementInput = document.getElementById("balance");
      // const balanceElement = balanceElementInput.innerText;
      // console.log(balanceElement);
      const currentBalance = getBalance();

       // 4. calculate the new balance
       const newbalance = currentBalance - Number(cashoutAmount);
       console.log(newbalance);
       if(newbalance < 0) {
         alert("invalid Amount");
         return;
       }
       const Pin = getValueFromInput("cashout-pin");
       if(Pin === "1234"){
         alert("Cashout Successfull");
         // document.getElementById("balance").innerText = newbalance;
         setBalance(newbalance);
          //1. history-container ke soriye niye asbo
        const history = document.getElementById("history-container");
        
        //2. new div innerHTML add korbo
        const newHistory = document.createElement("div");
        //3. history container ke shore niye asbo
        newHistory.innerHTML = `
        <div class="transaction-card transaction-card p-5 bg-base-100">
           Cashout ${cashoutAmount} TAKA Success to 
        ${cashoutNumber} at ${new Date()} 
        </div>
            `;
        history.appendChild(newHistory);
         return;
       }
       else {
         alert("invalid pin")
       }

 })



//  document.getElementById("cashout-btn").addEventListener("click", function() {

//  const agentNumberInput = document.getElementById("cashout-number");
//  const agentInput = agentNumberInput.value;
//  console.log(agentInput);
//  if(agentInput.length != 11) {
//     alert("invalid agent number")
//     return;

//  }

//  const amountElementInput = document.getElementById("cashout-amount");
//  const amountElement = amountElementInput.value;
//  console.log(amountElement);

//     const balanceElementInput = document.getElementById("balance");
//     const balanceElement = balanceElementInput.innerText;
//     console.log(balanceElement);

//     const newbalance = Number(balanceElement) - Number(amountElement);
//     console.log(newbalance);

//      if(newbalance < 0) {
//         alert("Invalid amount")
//         return;
//     }
 
//     const pinElementInput = document.getElementById("cashout-pin");
//     const pinElement = pinElementInput.value;
//     if(pinElement === "1234"){
//         alert("Cashout Successfull")
//         balanceElementInput.innerText = newbalance;
//         return;
//     }
//     else {
//         alert("invalid pin")
//         return;
//     }
//  })
//     // 1. get the agent number & validate
  

//     // 2. get the amount, validate, convert to number
 
//     // 3. get the current balance, validate, convert to number
   

//     // 4. calculate the new balance
   
//     // 5.get the pin and verify
   
//     // 5.1true:: show an alart > set balance
//     // 5.2 true:: show an error alart > return
