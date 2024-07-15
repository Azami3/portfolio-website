document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".nav_color");
    const sections = document.querySelectorAll("div[id$='_background']");

    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); 
            scrollToSection(this.getAttribute("onclick").split("'")[1]);
        });
    });

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                links.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("onclick").includes(entry.target.id)) {
                        link.classList.add("active");
                    }
                });
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(section => observer.observe(section));
});


