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

function toggleOrder() {
    const toggleEl = document.querySelector('#toggleorder');
    const recipeContainerEl = document.querySelector('.homediv');
    
    if (recipeContainerEl.style.flexDirection === "row") { 
        recipeContainerEl.style.flexDirection = "row-reverse";
        console.log("%s", recipeContainerEl.style.flexDirection);
    } 
    else {
        recipeContainerEl.style.flexDirection = "row";
        console.log("%s", recipeContainerEl.style.flexDirection);
    }

}