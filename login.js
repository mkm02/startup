function login() {
    const userNameEl = document.querySelector('#username');
    const passwordEl = document.querySelector('#password');
    localStorage.setItem('userName', userNameEl.value);
    //Password not currently used for security concerns
    //Perhaps using Node.js, npm install crypto-js to encode password?
    window.location.href = "index.html";
    getUsername();
}