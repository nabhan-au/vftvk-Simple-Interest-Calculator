function compute()
{
    var p = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var year = document.getElementById("years").value;
    if (p == ""){
        alert("Please enter positive number");
        document.getElementById("principal").focus()
    } else if (parseFloat(p) <= 0) {
        alert("Amount must be positive number")
        document.getElementById("principal").focus()
    }
    else{
        var current_year = new Date().getFullYear();
        var result = document.getElementById("result");
        result.innerHTML = "if you deposit <mark>" + p + "</mark><br>at an interest rate of <mark>" + rate + "%</mark><br>You will recieve an amount of <mark>" + (parseFloat(p)*parseFloat(rate)/100*parseFloat(year)).toString() + "</mark><br>In the year <mark>" + (parseInt(current_year) + parseInt(year)).toString() + "</mark>"; 
    }
    
}

function update_value()
{
    var show = document.getElementById("show-percent")
    var percent = document.getElementById("rate").value;
    show.innerHTML = percent + "%"
}
        