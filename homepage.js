function getUsername() {
    const welcomeStmtEl = document.querySelector('#welcome');
    const personalWelcomeEl = document.createElement('div');
    let userNameEl = localStorage.getItem('userName');
    if (userNameEl !== null) {
        personalWelcomeEl.setAttribute("id", "personalStatement");
        personalWelcomeEl.textContent = "Welcome " + userNameEl + "!";
        welcomeStmtEl.appendChild(personalWelcomeEl);
    }
}


window.onload = function() {
    getUsername();
};