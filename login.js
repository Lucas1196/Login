function submit() {
    fetch("login.json")
    .then(response => response.json())
    .then(data => {

        var username = document.getElementById("username-input").value;
            password = document.getElementById("password").value;
        
        for ( var i = 0; i < data.users.length; i++ ) {
            if ( username == data.users[i].username && password == data.users[i].password ) {
                localStorage.user = JSON.stringify(data.users[i]);
                window.location.href = 'logged.html';
                return;
            }
            else {
                console.log("Try Again");
            }
        }

    });
}
//Redirect LOG-IN page
function redirect() {
    
    if ( localStorage.user != null ) {
        window.location.href = ("logged.html");
    } 

}
redirect();
