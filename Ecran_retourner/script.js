const container = document.getElementById("box");

// 1. Appliquer la rotation après 2 secondes
setTimeout(() => {
    container.classList.add("rotate");
}, 5000); // Rotation après 2 secondes

// 2. Appliquer l'oscillation infinie après la fin de la rotation (3 secondes)
setTimeout(() => {
    container.classList.add("wiggle"); // Lancer l'oscillation infinie
}, 6000); // L'oscillation commence après la rotation (3 secondes)


