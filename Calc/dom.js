let display = document.getElementById("display");

function getValue(obj) 
{
    let input = obj.innerHTML;

    if (input == "=") 
    {
        display.innerHTML = eval(display.innerHTML);
    } 
    else if (input == "C") 
    {
        display.innerHTML = "0";
    }
    else if (input == "AC")
    {
        display.innerHTML = "0";
    }
    else 
    {
        if (display.innerHTML == "0") 
        {
            display.innerHTML = input;
        } 
        else 
        {
            display.innerHTML += input;
        }
    }
}
