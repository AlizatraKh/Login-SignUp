const email = document.getElementById("email");
const password = document.getElementById("password");
const login = document.getElementById("login");

login.onclick = function() {
  swal ({
    title: "You've Successfully Logged In",
    icon: "success",
    button: "OK"
  })
}
