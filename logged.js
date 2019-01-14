document.addEventListener('DOMContentLoaded', function() {

    let user = JSON.parse(localStorage.user);

    document.getElementById("logged").innerHTML = user.username;
    document.getElementById("welcome").innerHTML = user.username;
    
    document.getElementById("welcome-content").style.opacity = "1"; 
    setTimeout(function(){
    document.getElementById("welcome-content").style.opacity ="0";
    },1200)

    let button = document.getElementById("logout");

    button.addEventListener("click", event => {
        if (event.button == 0) {
            window.localStorage.removeItem('user');
            setTimeout(function () {
                window.location.href = "login.html";
            }, 800);
        } 
        else {
            console.log("Try Again");
        }
    });

});

//Redirect LOG-IN page
function redirect() {
    if ( localStorage.user == null ) {
        window.location.href = ("login.html");
    }   
    else {
        console.log("I dont't redirect");
    }
}
redirect();
