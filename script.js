document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio loaded successfully!");

    // Smooth scrolling for navigation links
    const links = document.querySelectorAll("a[href^='#']");
    links.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Form validation
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", event => {
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (!name || !email || !message) {
                event.preventDefault();
                alert("Please fill out all fields.");
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                event.preventDefault();
                alert("Please enter a valid email address.");
            } else {
                alert("Thank you for your message!");
            }
        });
    }
});
