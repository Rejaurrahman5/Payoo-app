document.getElementById("login-btn").addEventListener("click", function() {
    // get the mobile number input
    const numberInput = document.getElementById("input-number");
    const contactNumber = numberInput.value;
    console.log(contactNumber);


    //get the pin number input
    const inputPin = document.getElementById("input-pin");
    const pin = inputPin.value;
    console.log(pin);
    //matching pin & mobole number
    if(contactNumber === "01609242588" && pin =="1234") {
        
     //true:::>> alert> homepage
        alert("login success");

        window.location.assign("/home.html")
    }
    else {
        alert("login failed")
        return;
    }
    
    //true:::>> alert> return
})