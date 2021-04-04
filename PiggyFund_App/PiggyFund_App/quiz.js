let submitButton = document.getElementById("enter");

console.log(submitButton);


function compute() {
    //alert("Please navigate to the login page");
    console.log(income);
    let income = document.getElementById("earnings").value;
    document.cookie = "username=John Doe";
}

document.getElementById("submitButton").addEventListener("click", compute);
