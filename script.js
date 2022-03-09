function compute()
{
    var p = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var year = document.getElementById("years").value;
    if (p == ""){
        alert("Amount is empty");
    }
    else if (rate == ""){
        alert("Rate is empty");
    }
    else if (year == ""){
        alert("Year is empty")
    }
    else{
        var current_year = new Date().getFullYear();
        var result = document.getElementById("result");
        result.innerHTML = "if you deposit " + p + "<br>at an interest rate of " + rate + "%<br>You will recieve an amount of " + (parseFloat(p)*parseFloat(rate)/100*parseFloat(year)).toString() + "<br>In the year " + (parseInt(current_year) + parseInt(year)).toString(); 
    }
    
}

function update_value()
{
    var show = document.getElementById("show-percent")
    var percent = document.getElementById("rate").value;
    show.innerHTML = percent + "%"
}
        