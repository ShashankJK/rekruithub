// AOS Initialization
AOS.init({
    duration: 1000, // Adjusted duration for smoother animations
    easing: 'ease-in-out-cubic', // Dynamic easing effect
    delay: 200, // Maintained delay for staggered effects
    once: true, // Ensures animations happen only once
});

// Mobile menu toggle functionality with sliding effect
document.getElementById('menu-toggle').addEventListener('click', function() {
    let menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
    setTimeout(() => {
        menu.classList.toggle('show');
    }, 10); // Adding a small delay to trigger the animation
});

// Collapse mobile menu after clicking a link
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', function() {
        let menu = document.getElementById('mobile-menu');
        menu.classList.add('hidden');
        menu.classList.remove('show');
    });
});

// Close the mobile menu when clicking outside of it
document.addEventListener('click', function(event) {
    let menu = document.getElementById('mobile-menu');
    let toggle = document.getElementById('menu-toggle');
    let isClickInsideMenu = menu.contains(event.target);
    let isClickInsideToggle = toggle.contains(event.target);

    if (!isClickInsideMenu && !isClickInsideToggle && menu.classList.contains('show')) {
        menu.classList.add('hidden');
        menu.classList.remove('show');
    }
});
