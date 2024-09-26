var usersData = []

var registerBtn = document.getElementById("register");
registerBtn && registerBtn.addEventListener("click", function () {

    var rName = document.getElementById("registerName")
    var rEmail = document.getElementById("registerEmail")
    var rPassword = document.getElementById("registerPass")



    var userObj = {
        name: rName.value,
        email: rEmail.value,
        password: rPassword.value
    }
    usersData.push(userObj);
    


    rName.value = ""
    rEmail.value = ""
    rPassword.value = ""

    console.log(usersData);
    localStorage.setItem("users", JSON.stringify(usersData))
    var fetchingData = JSON.parse(localStorage.getItem("users"));
    fetchingData.push(userObj)


    location.href = "login.html"


})

var loginBtn = document.getElementById("login");

loginBtn && loginBtn.addEventListener("click", function () {
    var loginEmail = document.getElementById("loginEmail").value;
    var loginPass = document.getElementById("loginPassword").value;

    var users = JSON.parse(localStorage.getItem("users")) || [];

    for (var user of users) { 
        if (user.email === loginEmail) {
            if (user.password === loginPass) {
                alert("Login successfully");
                return;
            } else {
                alert("Email is correct, but the password is wrong.");
                return;
            }
        }
    }
    alert("No user found with that email.");
});