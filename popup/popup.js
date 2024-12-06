// popup.js

let compteur = 0;

function showModalGagne() {
    const modalGagne = document.getElementById("modalGagne");
    modalGagne.classList.add('show');
}

function showModal() {
    const modal = document.getElementById("modal");
    const modalMessage = document.getElementById("modalMessage");
    const questionCard = document.querySelector('.question-card');
    const cardRect = questionCard.getBoundingClientRect();
    
    // Obtenir les dimensions de la modal
    const modalWidth = 300;  // Largeur approximative de la modal
    const modalHeight = 200; // Hauteur approximative de la modal
    
    // Calculer les limites pour le positionnement
    const minTop = cardRect.top - modalHeight;
    const maxTop = cardRect.bottom;
    const minLeft = cardRect.left - modalWidth/2;
    const maxLeft = cardRect.right - modalWidth/2;
    
    // Générer une position aléatoire dans ces limites
    const randomTop = Math.floor(Math.random() * (maxTop - minTop) + minTop);
    const randomLeft = Math.floor(Math.random() * (maxLeft - minLeft) + minLeft);
    
    // S'assurer que la modal reste visible à l'écran
    const finalTop = Math.max(20, Math.min(randomTop, window.innerHeight - modalHeight - 20));
    const finalLeft = Math.max(20, Math.min(randomLeft, window.innerWidth - modalWidth - 20));
    
    // Appliquer la position
    modal.style.top = finalTop + "px";
    modal.style.left = finalLeft + "px";

    switch (compteur) {
        case 0:
            modalMessage.textContent = `La réponse c'est "Courant marin" 😉`;
            break;
        case 1:
            modalMessage.textContent = `il faut écrire dans le formulaire "Courant marin" 🤓`;
            break;
        case 2:
            modalMessage.textContent = `Écrit "Courant marin" 😠`;
            break;
        case 3:
            modalMessage.textContent = `Mais écoute moi ! 🤬`;
            break;
        default:
            modalMessage.textContent = `Je t'ai donné la réponse, je ne peux vraiment plus rien pour toi là ! 😑`;
            break;
    }

    modal.classList.add('show');
    document.getElementById("answerField").disabled = true;
    compteur += 1;
}


document.getElementsByClassName("close")[0].addEventListener("click", function() {
    const modal = document.getElementById("modal");
    modal.classList.remove('show');
    document.getElementById("answerField").disabled = false;
});

document.getElementById('answerField').addEventListener('input', function() {
    showModal();
});

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    if (document.getElementById("answerField").value.toUpperCase() === "COURANT MARIN") {
        showModalGagne();
    }
});