function reveal() {
    let reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

function parallax() {
    let windowHeight = window.innerHeight;
    let parallaxes = document.getElementsByClassName('parallax');
    for (let i = 0; i < parallaxes.length; i++) {
        let top = parallaxes[i].getBoundingClientRect().top;
        let elementHeight = parallaxes[i].offsetHeight
        if (top >= -elementHeight && top <= windowHeight) {
            parallaxes[i].style.backgroundPositionY = 100 - (100 * (top + elementHeight) / (windowHeight + elementHeight)) + '%';
        } else if (top < -elementHeight) {
            parallaxes[i].style.backgroundPositionY = "100%";
        } else {
            parallaxes[i].style.backgroundPositionY = "0%";
        }
    }
}

window.addEventListener("scroll", reveal);
window.addEventListener('scroll', parallax);

reveal();
parallax();

