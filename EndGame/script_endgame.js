document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const restartButton = document.getElementById('restart-button');
    const homeButton = document.getElementById('home-button');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    restartButton.addEventListener('click', function() {
        window.location.href = 'games.html';
    });

    homeButton.addEventListener('click', function() {
        window.location.href = 'index.html';
    });

    // Animation de confettis à l'arrivée sur la page
    createConfetti();
});

function createConfetti() {
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDelay = Math.random() * 3 + 's';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        document.body.appendChild(confetti);

        // Supprime le confetti après l'animation
        setTimeout(() => {
            confetti.remove();
        }, 6000);
    }
}