const appearList = document.querySelectorAll(".zero-opacity");
const callback = function(entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            const elem = entry.target;
            if (elem.classList.contains("fade-bottom")) {
                entry.target.classList.add("fadeInBottom");
            } else if (elem.classList.contains("fade-top")) {
                entry.target.classList.add("fadeInTop")
            } else if (elem.classList.contains("fade-right")) {
                entry.target.classList.add("fadeInRight")
            } else if (elem.classList.contains("fade-left")) {
                entry.target.classList.add("fadeInLeft")
            }
            
            observer.unobserve(entry.target);
        }
    })
}

const io = new IntersectionObserver(callback);
for (let i = 0; i < appearList.length; i++) {
    io.observe(appearList[i]);
}

// Log in link
function logInOnClick() {
    const logInContainer = document.querySelector("#log-in-container");
    logInContainer.classList.remove("display-none");
} 

const logInLink = document.querySelector("#logInLink");
logInLink.addEventListener("click", logInOnClick);

// Exit button
function exitInOnClick() {
    const logInContainer = document.querySelector("#log-in-container");
    logInContainer.classList.add("display-none");
    const emailMessage = document.querySelector("#emailMessage");
    emailMessage.textContent = "";
    const emailInput = document.querySelector("#emailInput");
    emailInput.value = "";
} 

const exitButton = document.querySelector("#exitButton");
exitButton.addEventListener("click", exitInOnClick);

// Email input
const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
};

function emailOnChange(event) {
    const emailInput = event.currentTarget;
    const email = emailInput.value;
    if (!validateEmail(email)) {
        const emailMessage = document.querySelector("#emailMessage");
        emailMessage.textContent = "Invalid email address!";
    } else {
        const emailMessage = document.querySelector("#emailMessage");
        emailMessage.textContent = "";
    }
}

const emailInput = document.querySelector("#email");
emailInput.addEventListener("change", emailOnChange);
