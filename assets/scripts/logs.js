var emailArray = ['admin'];
var passwordArray = ['admin'];

var loginBox = document.getElementById("login");
var regBox = document.getElementById("register");
var forgetBox = document.getElementById("forgot");

var loginTab = document.getElementById("loginTab");
var regTab = document.getElementById("registerTab");

function regTabFun() {
    event.preventDefault();

    regBox.style.visibility = "visible";
    loginBox.style.visibility = "hidden";
    forgetBox.style.visibility = "hidden";

    regTab.style.backgroundColor = "#ee6001";
    regTab.style.color = "#fff";
    loginTab.style.backgroundColor = "transparent";
}
function loginTabFun() {
    event.preventDefault();

    regBox.style.visibility = "hidden";
    loginBox.style.visibility = "visible";
    forgetBox.style.visibility = "hidden";

    loginTab.style.backgroundColor = "#ee6001";
    loginTab.style.color = "#fff";
    regTab.style.backgroundColor = "transparent";

    document.getElementById('errorMess').innerHTML = "";
}
function forTabFun() {
    event.preventDefault();

    regBox.style.visibility = "hidden";
    loginBox.style.visibility = "hidden";
    forgetBox.style.visibility = "visible";

    regTab.style.backgroundColor = "transparent";
    loginTab.style.backgroundColor = "transparent";

}


function register() {
    event.preventDefault();

    var email = document.getElementById("username-register").value;
    var password = document.getElementById("password-register").value;
    var passwordRetype = document.getElementById("repet-password-register").value;

    if (email == "") {
        // alert("Email required.");
        document.getElementById('errorMess').innerHTML = "Email required.";

        return;
    } else if (email.includes(" ")) {
        document.getElementById('errorMess').innerHTML = "No space";
        return;
    } else if (password == "") {
        // alert("Password required.");
        document.getElementById('errorMess').innerHTML = "Password required.";

        return;
    }
    else if (passwordRetype == "") {
        // alert("Password required.");
        document.getElementById('errorMess').innerHTML = "Password required.";

        return;
    }
    else if (password != passwordRetype) {
        // alert("Password don't match retype your Password.");
        document.getElementById('errorMess').innerHTML = "Password don't match retype your Password.";

        return;
    } else if (password.length < 8 || password.length > 15) {
        document.getElementById('errorMess').innerHTML = "Password Password length must be atleast 8 characters and the most 15";
        return;
    }
    else if (emailArray.indexOf(email) == -1) {
        emailArray.push(email);
        passwordArray.push(password);

        // alert(email + "  Thanks for registration. \nTry to login Now");

        document.getElementById('errorMess').innerHTML = `${email} Thanks for registration. \nTry to login Now`

        document.getElementById("username-register").value = "";
        document.getElementById("password-register").value = "";
        document.getElementById("repet-password-register").value = "";
    }
    else {
        // alert(email + " is already register.");
        document.getElementById('errorMess').innerHTML = `${email} is already register.`;

        return;
    }
}
function login() {
    event.preventDefault();

    var email = document.getElementById("log-email").value;
    var password = document.getElementById("log-password").value;

    var username = email.charAt(0).toUpperCase() + email.slice(1);


    var i = emailArray.indexOf(email);

    if (emailArray.indexOf(email) == -1) {
        if (email == "") {
            document.getElementById('errorMess').innerHTML = "Email required.";
            // alert("Email required.");
            return;
        }
        // alert("Email does not exist.");
        document.getElementById('errorMess').innerHTML = "Email does not exist.";

        return;
    }
    else if (passwordArray[i] != password) {
        if (password == "") {
            document.getElementById('errorMess').innerHTML = "Password required.";
            // alert("Password required.");
            return;
        }
        // alert("Password does not match.");
        document.getElementById('errorMess').innerHTML = "Password does not match.";

        return;
    }
    else {
        // alert(email + " yor are login Now \n welcome to our website.");
        // document.getElementById('username').innerHTML = document.getElementById("log-email").value;
        sessionStorage.setItem('username', username);
        location.href = '../../welcome.html';

        document.getElementById("log-email").value = "";
        document.getElementById("log-password").value = "";
        return;
    }

}
function forgot() {
    event.preventDefault();

    var email = document.getElementById("forgoten-email").value;

    if (emailArray.indexOf(email) == -1) {
        if (email == "") {
            // alert("Email required.");
            document.getElementById('errorMess').innerHTML = "Email required.";

            return;
        }
        // alert("Email does not exist.");
        document.getElementById('errorMess').innerHTML = "Email does not exist.";

        return;
    }

    document.getElementById('errorMess').innerHTML = "email is send to your email check it in 24hr. \n Thanks";

    // alert("email is send to your email check it in 24hr. \n Thanks");`
    document.getElementById("forgoten-email").value = "";
}