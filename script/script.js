function doLogin() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if(username == "" || password == "") {
    alert("Username e password sono obbligatori");
  }
}
