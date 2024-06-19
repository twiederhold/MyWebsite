// Get the main content element
const main = document.getElementById('main');

// Add an event listener to the window resize event
window.addEventListener('resize', () => {
    // Get the current width of the window
    const screenWidth = window.innerWidth;

    // Scale the main content element based on the screen width
    if (screenWidth <= 600) {
        main.style.transform = 'scale(0.8)';
    } else if (screenWidth <= 800) {
        main.style.transform = 'scale(1)';
    } else {
        main.style.transform = 'scale(1.2)';
    }
});

