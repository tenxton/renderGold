document.getElementById('navbarToggle').addEventListener('click', () => {
    const navbar = document.getElementById('navbar');
    if (navbar.classList.contains('expanded')) {
        navbar.classList.remove('expanded');
    } else {
        navbar.classList.add('expanded');
    }
});
