document.addEventListener('DOMContentLoaded', function() {
    const navbarToggle = document.getElementById('navbarToggle');
    const navbarNav = document.getElementById('navbarNav');

    navbarToggle.addEventListener('click', function() {
        if (navbarNav.classList.contains('show')) {
            navbarNav.style.maxHeight = null; // Reset max-height
            navbarNav.classList.remove('show');
        } else {
            navbarNav.style.maxHeight = navbarNav.scrollHeight + "px"; // Set max-height to actual height
            navbarNav.classList.add('show');
        }
    });
});
