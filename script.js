// Welcome message in console
console.log("Welcome to Prashant Banjare Portfolio");

// Highlight active section in navbar
const sections = document.querySelectorAll("section, header");
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
const revealElements = document.querySelectorAll("section, header");

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

let scrollSnapTimeout;
const snapTargets = Array.from(document.querySelectorAll('header, section'));


// This block is forcing the page to snap to the nearest section after you stop scrolling: It calculates which section is closest to the top of the viewport and smoothly scrolls to it after a short delay. You can adjust the delay time (currently 120ms) to make it feel more responsive or less aggressive based on your preference.

// const snapToNearestSection = () => {
//     const offset = window.scrollY + 80;
//     let closest = snapTargets[0];
//     let minDistance = Math.abs(snapTargets[0].offsetTop - offset);

//     snapTargets.forEach(el => {
//         const distance = Math.abs(el.offsetTop - offset);
//         if (distance < minDistance) {
//             minDistance = distance;
//             closest = el;
//         }
//     });

//     if (closest) {
//         window.scrollTo({ top: closest.offsetTop - 70, behavior: 'smooth' });
//     }
// };

// window.addEventListener('scroll', () => {
//     clearTimeout(scrollSnapTimeout);
//     scrollSnapTimeout = setTimeout(() => {
//         snapToNearestSection();
//     }, 120);
// });

// Feedback form handling
const feedbackForm = document.getElementById("feedback-form");
const formStatus = document.getElementById("form-status");

if (feedbackForm) {
    feedbackForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const rating = document.getElementById("rating").value;
        const message = document.getElementById("message").value.trim();

        if (!rating || !message) {
            formStatus.textContent = "Please fill in the rating and feedback message.";
            return;
        }

        formStatus.textContent = "Thank you! Your feedback has been recorded.";

        feedbackForm.reset();
    });
}