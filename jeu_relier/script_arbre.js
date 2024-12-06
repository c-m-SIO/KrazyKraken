const canvas = document.getElementById('connectionCanvas');
const ctx = canvas.getContext('2d');
let selectedPoint = null;
let connections = new Set();
let remainingPairs = new Set([1, 2, 3, 4, 5]);
let lastConnectionAttempts = 0;
let canMakeLastConnection = false;
let redirect = false;

function resizeCanvas() {
    const container = canvas.parentElement;
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;
    drawConnections();
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

document.querySelectorAll('.point').forEach(point => {
    point.addEventListener('click', handlePointClick);
});

function handlePointClick() {
    if (!selectedPoint) {
        selectedPoint = this;
        this.classList.add('selected');
    } else {
        if (selectedPoint !== this) {
            tryConnection(selectedPoint, this);
        }
        selectedPoint.classList.remove('selected');
        selectedPoint = null;
    }
}

function tryConnection(point1, point2) {
    const id = point1.dataset.id;
    
    // Vérifier si c'est une connexion valide
    if (id === point2.dataset.id && point1.parentElement !== point2.parentElement) {
        // Si c'est la dernière paire
        if (remainingPairs.size === 1) {
            if (canMakeLastConnection) {
                // Permettre la connexion finale
                makeConnection(point1, point2, id);
                remainingPairs.delete(parseInt(id));
                setTimeout(showVictoryMessage, 1000);
                return;
            }
            
            lastConnectionAttempts++;
            if (lastConnectionAttempts <= 3) {
                handleLastPairAttempt();
            }
            if (lastConnectionAttempts === 3) {
                canMakeLastConnection = true;
            }
            return;
        }
        
        // Pour toutes les autres connexions
        makeConnection(point1, point2, id);
        remainingPairs.delete(parseInt(id));
        showSuccessMessage();
    } else {
        showErrorMessage();
    }
}

function handleLastPairAttempt() {
    const messages = [
        "🤔 T'es sûr la?",
        "😏 Mais attend t'es vraiment sûr sûr ? Prend ton temps surtout",
        "🌡️ Ok c'est bon tu es tros fort j'arrete de t'embeter "
    ];
    
    showCustomModal("Oula !", 
        messages[lastConnectionAttempts - 1]);
}

function makeConnection(point1, point2, id) {
    const rect1 = point1.getBoundingClientRect();
    const rect2 = point2.getBoundingClientRect();
    const containerRect = canvas.getBoundingClientRect();

    const connection = {
        x1: rect1.left + rect1.width/2 - containerRect.left,
        y1: rect1.top + rect1.height/2 - containerRect.top,
        x2: rect2.left + rect2.width/2 - containerRect.left,
        y2: rect2.top + rect2.height/2 - containerRect.top,
        id: id
    };
    
    connections.add(connection);
    drawConnections();
}

function drawConnections() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    connections.forEach(conn => {
        ctx.beginPath();
        ctx.moveTo(conn.x1, conn.y1);
        ctx.lineTo(conn.x2, conn.y2);
        ctx.strokeStyle = '#1a73e8';
        ctx.lineWidth = 4;
        ctx.stroke();
    });
}

function showSuccessMessage() {
    const messages = [
        "🌊 Excellent ! Cette connexion est parfaite !",
        "🐋 Tu navigues comme un pro !",
        "🐠 Splash ! Belle découverte !"
    ];
    showCustomModal("✨ Bien joué !", 
        messages[Math.floor(Math.random() * messages.length)]);
}

function showErrorMessage() {
    showCustomModal("🌊 Oups !", 
        "Ces éléments ne sont pas liés... Essaie une autre combinaison !");
}

function showVictoryMessage() {
    showCustomModal("🎉 VICTOIRE !", 
        "Bravo ! Tu as compris que comme notre corps, l'océan est un système complexe qui régule la température de notre planète. Le préserver, c'est préserver notre avenir !", 
        true);
}

function showCustomModal(title, message, redirect) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <h2 style="color: var(--primary); margin-bottom: 1.5rem;">${title}</h2>
        <p style="font-size: 1.2rem; margin-bottom: 2rem;">${message}</p>
        <button onclick="this.parentElement.remove()" 
                style="width: 100%; padding: 1rem; background: var(--primary); 
                color: white; border: none; border-radius: 12px; cursor: pointer;">
            Continuer
        </button>
    `;
    console.log(redirect);
    document.body.appendChild(modal);
    setTimeout(() => modal.classList.add('show'), 10);
    if (redirect) {
        modal.querySelector('button').addEventListener('click', () => {
            modal.classList.remove('show');
            setTimeout(() => {
                modal.remove();
                // Redirection vers la page de victoire
                window.location.href = '../popup/popup.html';
            }, 300);
        });
    }
}

// modal.querySelector('button').addEventListener('click', () => {
//     modal.classList.remove('show');
//     setTimeout(() => {
//         modal.remove();
//         if (isCorrect) {
//             window.location.href = '../popup/popup.html';
//         }
//     }, 300);
// });

