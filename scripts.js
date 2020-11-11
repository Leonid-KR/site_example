"use strict";

function calculator(char)
{
    function round(value, decimals)
    {
        return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
    }
    let x = document.getElementById("sum1").value;
    let y = document.getElementById("sum2").value;
    if(isNaN(x) || isNaN(y)) document.getElementById("calc_result").innerHTML = "Incorrect";
    else switch(char)
    {
        case "+":
            document.getElementById("calc_result").innerHTML = round((Number(x) + Number(y)), 10);
            break;
        case "-":
            document.getElementById("calc_result").innerHTML = round((Number(x) - Number(y)), 10);
            break;
        case "*":
            document.getElementById("calc_result").innerHTML = round((Number(x) * Number(y)), 10);
            break;
        case "/":
            document.getElementById("calc_result").innerHTML = round((Number(x) / Number(y)), 10);
            break;
    }
}