const container = document.getElementById("box");

// 1. Appliquer la rotation après 2 secondes
setTimeout(() => {
    container.classList.add("rotate");
}, 5000); // Rotation après 2 secondes

// 2. Appliquer l'oscillation infinie après la fin de la rotation (3 secondes)
setTimeout(() => {
    container.classList.add("wiggle"); // Lancer l'oscillation infinie
}, 6000); // L'oscillation commence après la rotation (3 secondes)

document.getElementById('validate-button').addEventListener('click', function() {
    var contenu = document.getElementById('user-input').value;
    
    if (contenu == "Les poumons") {
        showCustomModal(
            "Bonne réponse !", 
            "Les poumons peuvent être comparés aux océans car ils jouent un rôle vital dans la respiration et la purification de l'air, tout comme les océans régulent le climat et abritent de nombreuses formes de vie. De plus, tout comme la pollution de l'air affecte les poumons, la pollution des océans perturbe l'équilibre écologique et la santé marine. Les deux systèmes, humains et océaniques, sont essentiels à la vie sur Terre et sont fortement impactés par la pollution.",
            true
        );
        clickCount = 0;
    } else {
        showCustomModal(
            "😅 T'es vraiment nul !", 
            "C'est peut-etre une des 4 options",
            false
        );
    }
});


function showCustomModal(title, message, isCorrect) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <h2 style="color: var(--primary); margin-bottom: 1rem;">${title}</h2>
        <p style="font-size: 1.2rem; margin-bottom: 1.5rem;">${message}</p>
        <button style="width: 100%; padding: 0.8rem;">
            OK, compris !
        </button>
    `;
    
    document.body.appendChild(modal);
    setTimeout(() => modal.classList.add('show'), 10);
    
    modal.querySelector('button').addEventListener('click', () => {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.remove();
            if (isCorrect) {
                window.location.href = '../JeuImage/index.html';
            }
        }, 300);
    });
}
// document.getElementById('validate-button').addEventListener('click', function() {
//     var contenu = document.getElementById('user-input').value;
//     if(contenu == "Les poumons"){
//         showCustomModal("Bonne réponse !" );
//     } else {
//         showCustomModal("T'es vraiment nul !");
//     }        
// });