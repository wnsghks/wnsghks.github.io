const loginForm = document.querySelector(".login_form");
const login = document.querySelector(".login_form .login");
const name = document.querySelector(".profile .name");

const USERNAME = "username";

function saveUserName(event){
    event.preventDefault();
    const userName = login.value;
    localStorage.setItem(USERNAME, userName);
    hide(userName);
}

function hide(owner){
    loginForm.classList.add("hide");   
    name.classList.remove("hide");
    name.innerText = `${owner}'s travel story`
}

const storage = localStorage.getItem(USERNAME);

if(storage === null){
    loginForm.classList.remove("hide");   
    loginForm.addEventListener("submit", saveUserName);
}else{
    hide(storage);
}
