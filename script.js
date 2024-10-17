const button = document.getElementById('colorButton');

button.addEventListener('click', () => {
    // Generate a random color for the text
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    button.style.color = randomColor; // Change only the text color

    // Add heartbeat effect
    button.classList.add('heartbeat');

    // Remove heartbeat effect after a short duration to allow re-triggering
    setTimeout(() => {
        button.classList.remove('heartbeat');
    }, 600); // Match with the duration of the animation
});
