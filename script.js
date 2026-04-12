// Welcome message in console
console.log("Welcome to Prashant Banjare Portfolio");

// Highlight active section in navbar
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });

});


// SCROLL ANIMATION
const revealElements = document.querySelectorAll("section");

const sectionThemes = {
    about: "theme-about",
    skills: "theme-skills",
    projects: "theme-projects",
    contact: "theme-contact"
};

const revealActiveSection = () => {
    const windowHeight = window.innerHeight;
    let activeSection = null;
    let maxVisibleHeight = 0;

    revealElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const visibleTop = Math.max(rect.top, 0);
        const visibleBottom = Math.min(rect.bottom, windowHeight);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);

        if (visibleHeight > maxVisibleHeight) {
            maxVisibleHeight = visibleHeight;
            activeSection = el;
        }
    });

    revealElements.forEach(el => {
        if (el === activeSection) {
            el.classList.add("show");
        } else {
            el.classList.remove("show");
        }
    });

    updateBodyTheme(activeSection);
};

const updateBodyTheme = activeSection => {
    const body = document.body;
    body.classList.remove(...Object.values(sectionThemes));

    if (activeSection && sectionThemes[activeSection.id]) {
        body.classList.add(sectionThemes[activeSection.id]);
    }
};

window.addEventListener("scroll", revealActiveSection);
window.addEventListener("load", () => {
    revealActiveSection();
    updateSocialStats();
});

async function updateSocialStats() {
    const githubCount = document.getElementById("github-followers");
    const instagramCount = document.getElementById("instagram-followers");
    const linkedinCount = document.getElementById("linkedin-connections");

    try {
        const response = await fetch("https://api.github.com/users/PrashantBanjare");
        if (!response.ok) throw new Error("GitHub request failed");
        const data = await response.json();
        githubCount.textContent = `${data.followers} followers`;
    } catch (error) {
        githubCount.textContent = "Unable to load";
    }
}