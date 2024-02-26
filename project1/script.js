document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const sectionId = this.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);

        window.scrollTo({
            top: section.offsetTop - 250,
            behavior: 'smooth'
        });
    });
});