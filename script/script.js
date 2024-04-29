function doLogin() {  
    var username = document.getElementById("username").value;  
    var password = document.getElementById("password").value;  
    if(username == "" || password == "") {    
      alert("Username e password sono obbligatori");  
    }
  }

else {
    fetch('https://www.cacciaapi.altervista.org/login.php/loginIpad' , {
        method: 'POST' ,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        "username": username,
        "password": password
        })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => {
        console.error('Errore:', error);
    });
}
