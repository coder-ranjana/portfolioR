
/* Typing Effect */

const texts = [
    "Web Developer 💻",
    "DSA Learner 📚",
    "Future Software Engineer 🚀"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {

    const currentText = texts[textIndex];
    const typingElement = document.getElementById("typing");

    if (!typingElement) return;

    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typingElement.innerHTML =
        currentText.substring(0, charIndex);

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(type, 1200);
        return;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
    }

    setTimeout(type, isDeleting ? 50 : 100);
}

document.addEventListener("DOMContentLoaded", () => {
    type();
});

/* Mobile Menu */

function toggleMenu() {
    document.getElementById("navLinks")
        .classList.toggle("active");
}

/* Contact Button */

function sendMsg() {
    alert("Message Sent Successfully!");
}