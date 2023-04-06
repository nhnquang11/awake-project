function User(firstName, lastName, email, phone, username, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
    this.username = username;
    this.password = password;
}

if (localStorage.getItem("users") === null) {
    const users = [];
    localStorage.setItem("users", JSON.stringify(users));
}

// Log In 
function logInOnClick(event) {
    const username = document.getElementById("emailInput").value;
    const password = document.getElementById("passwordInput").value;
    if (username === "") {
        alert("Please enter username!");
        return;
    } 
    if (password === "") {
        alert("Please enter password!");
        return;
    }
    if (!checkUser(username)) {
        const users = JSON.parse(localStorage.getItem("users"));
        for (u of users) {
            if (u.username === username) {
                if (u.password === password) {
                    alert("Login successfully!")
                    location.assign("./index.html");
                } else {
                    alert("Wrong password! Try again!");
                }
                return;
            }
        }
    } else {
        alert("Username not found!")
    }
}

const logInButton = document.querySelector("#log-in-button");
logInButton.addEventListener("click", logInOnClick);

function checkUser(username) {
    const users = JSON.parse(localStorage.getItem("users"));
    for (u of users) {
        if (u.username === username) {
            return false;
        }
    }
    return true;
}

const validate = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
};

// Sign Up
function signUpOnClick(event) {
    const username = document.getElementById("username").value;
    if (checkUser(username)) {
        const firstName = document.getElementById("first-name").value;
        if (firstName === "") {
            alert("Please enter your first name!");
            return;
        }
        const lastName = document.getElementById("last-name").value;
        if (lastName === "") {
            alert("Please enter your last name!");
            return;
        }
        const email = document.getElementById("email").value;
        if (email === "") {
            alert("Please enter your email!");
            return;
        }
        if (!validate(email)) {
            alert("Invalid email address");
            return;
        }
        const phoneNumber = document.getElementById("phone-number").value;
        if (username === "") {
            alert("Please enter your username!");
            return;
        }
        const password = document.getElementById("password").value;
        if (password === "") {
            alert("Please enter your password!");
            return;
        }
        const newUser = new User(firstName, lastName, email, phoneNumber, username, password);
        const users = JSON.parse(localStorage.getItem("users"));
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        sessionStorage.setItem("currentUser", JSON.stringify(newUser));
        alert("Sign up successfully!")
        location.assign("./index.html")
    } else {
        alert("Username in use!")
    }
}

const signUpButton = document.querySelector("#signUpButton");
console.log(signUpButton)
signUpButton.addEventListener("click", signUpOnClick);
