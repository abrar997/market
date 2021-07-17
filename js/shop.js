
// accordation in shop page  

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}


// Dark moon mode by java script 
function changecolor(x) {
    x.classList.toggle("fa-moon");//change from lightbulb icon to moon icon
    document.body.classList.toggle("background");//change background color
    document.body.style.transition = "all 0.6s";
    body.toggle.style.color = "white";
}


// add error validation to the form

function formerrors() {

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var error = document.getElementById("error");

    var text = " ";

    error.style.backgroundColor = "red";
    error.style.color = "white";
    error.style.fontSize = "20px";
    error.style.textAlign = "center";
    error.style.textAlign = "center";
    error.style.padding = "10px";


    if (email.indexOf("@") == -1 || email.length < 6) {
        text = "please enter valid email";
        error.innerHTML = text;

        return false;


    }
    else if (password.length != 8) {
        text = " password consist equal to 8 numbers";
        error.innerHTML = text;

        return false;
    }

    // else if (x == "" || x == null)  {
    //     var x = document.forms["myForm"]["fname"].value;

    //     text = "Name must be filled out";
    //     return false;
    //   }


    else {
        error.style.display = "none";
        alert("Welcome with our services ");

        return true;
    }
}

formerrors();  //call function to work 




//create nav top in section navside u can open navbar from the icon header 

function openNav() {
    document.getElementById("mySidenav").style.height = "50px"; //height of nav 
    // document.getElementById("allsections").style.marginBottom="40px"

}

function closeNav() {
    document.getElementById("mySidenav").style.height = "0";

}


// pagination increase and decreasev  in single web page  and checkout web page ;

function increaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);//++
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}

function decreaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);//--
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number').value = value;
}



//  name="email_submit" value="submit" onclick="if(!this.form.checkbox.checked){alert('You must agree to the terms first.');return false}"






