document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-links a");
    const sections = document.querySelectorAll(".content-section");

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const target = this.getAttribute("data-target");

            // Hide all sections
            sections.forEach(section => {
                section.style.display = "none";
            });

            // Show the target section
            document.getElementById(target).style.display = "block";
        });
    });
});