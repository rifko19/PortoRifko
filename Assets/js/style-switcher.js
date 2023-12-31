// Toggler switcher
const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
styleSwitcherToggler.addEventListener("click", () => {
    const styleSwitcher = document.querySelector(".style-switcher");
    styleSwitcher.classList.toggle("open");
});

window.addEventListener("scroll", () => {
    const styleSwitcher = document.querySelector(".style-switcher");
    if (styleSwitcher.classList.contains("open")) {
        styleSwitcher.classList.remove("open");
    }
});

// Theme colors
const alternateStyle = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
    alternateStyle.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    });
}

const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () =>{
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
}
)
window.addEventListener("load", ()=> {
    if(document.body.classList.contains("dark"))
    {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else
    {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})

