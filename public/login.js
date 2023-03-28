(async () => {
  let authenticated = false;
  const userName = localStorage.getItem('userName');
  if (userName) {
    const nameEl = document.querySelector('#username');
    nameEl.value = userName;
    const user = await getUser(nameEl.value);
    authenticated = user?.authenticated;
  }
  
  if (authenticated) {
    document.querySelector('#loggedUser').textContent = userName;
    setDisplay('loginmenu', 'none');
    setDisplay('logoutmenu', 'flex');
  } else {
    setDisplay('loginmenu', 'flex');
    setDisplay('logoutmenu', 'none');
  }
})();

async function loginUser() {
  loginOrCreate(`/api/auth/login`);
}
  
async function createUser() {
  loginOrCreate(`/api/auth/create`);
}

async function loginOrCreate(endpoint) {
  const userName = document.querySelector('#username')?.value;
  const password = document.querySelector('#password')?.value;
  const response = await fetch(endpoint, {
  method: 'post',
  body: JSON.stringify({ user: userName, password: password }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
  });
    const body = await response.json();
  
    if (response?.status === 200) {
      localStorage.setItem('userName', userName);
      window.location.href = 'index.html';
    } else {
      const modalEl = document.querySelector('#msgModal');
      modalEl.querySelector('.modal-body').textContent = `⚠ Error: ${body.msg}`;
      const msgModal = new bootstrap.Modal(modalEl, {});
      msgModal.show();
    }
}

function logout() {
  localStorage.removeItem('userName');
  fetch(`/api/auth/logout`, {
    method: 'delete',
  }).then(() => (window.location.href = '/'));
}

async function getUser(user) {
  // See if we have a user with the given email.
  const response = await fetch(`/api/user/${user}`);
  if (response.status === 200) {
    return response.json();
  }
  
  return null;
}

function setDisplay(controlId, display) {
  const controlEl = document.querySelector(`#${controlId}`);
  if (controlEl) {
    controlEl.style.display = display;
  }
}