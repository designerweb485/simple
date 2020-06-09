function validate()
{
    var text = document.getElementById("text1").value;
    var regx = /^\d{11}$/;

    if(regx.test(text))
    {
        document.getElementById("ilbtext").style.color = "Green" ;
        document.getElementById("ilbtext").innerHTML = "<strong>Valid</strong>";
        return (true);
    }
    else{
        document.getElementById("ilbtext").style.color= "Red";
        document.getElementById("ilbtext").innerHTML="<strong>Invalid</strong>";
        return (false);
    }
}

function validate1()
{
    var text1 = document.getElementById("text2").value;
    var regx1 = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,10})(.[a-z]{2,10})$/;

    if(regx1.test(text1))
    {
        document.getElementById("ilbtext1").style.color = "Green" ;
        document.getElementById("ilbtext1").innerHTML = "<strong>Valid</strong>";
        return (true);
    }
    else{
        document.getElementById("ilbtext1").style.color= "Red";
        document.getElementById("ilbtext1").innerHTML="<strong>Invalid</strong>";
        return (false);
    }
}

