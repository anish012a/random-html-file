// Example of a simple script to add interactivity
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            links.forEach(link => link.classList.remove('active'));
            event.target.classList.add('active');
        });
    });
});
