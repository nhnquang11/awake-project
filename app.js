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