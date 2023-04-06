function welcomeSetUp() {
    var textWrapper = document.querySelector('.ml11 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w|)/g, "<span class='letter'>$&</span>");

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    anime.timeline({loop: false})
    .add({
        targets: '.ml11 .line',
        scaleY: [0,1],
        opacity: [0.5,1],
        easing: "easeOutExpo",
        duration: 700
    })
    .add({
        targets: '.ml11 .line',
        translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
        easing: "easeOutExpo",
        duration: 700,
        delay: 100
    }).add({
        targets: '.ml11 .letter',
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=775',
        delay: (el, i) => 34 * (i+1)
    }).add({
        targets: '.ml11',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });

    const welcomePage = document.querySelector("#welcome-container");
    const cb = function(entries, observer) {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                setTimeout(fadeOut, 3000);
                setTimeout(displayNone, 3000);
                observer.unobserve(entry.target);
            }
        })
    }

    function fadeOut() {
        welcomePage.classList.add("fadeOut");
    }

    function displayNone() {
        welcomePage.classList.add("display-none");
    }

    const wIO = new IntersectionObserver(cb);
    wIO.observe(welcomePage)
}

const currentUser = sessionStorage.getItem("currentUser")
if (currentUser != null) {
    const userName = JSON.parse(sessionStorage.getItem('currentUser')).firstName
    const welcomePage = document.querySelector("#welcome-container");
    welcomePage.classList.remove("display-none");
    welcomePage.innerHTML = `<h1 class="ml11">
    <span class="text-wrapper">
    <span class="line line1"></span>
    <span class="letters">Hello ${userName}</span>
    </span>
    </h1>`

    welcomeSetUp();    
}
