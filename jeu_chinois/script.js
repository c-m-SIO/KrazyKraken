const chineseCharacters = [
    "海洋生命系统",
    "心脏跳动循环",
    "水流运动平衡",
    "自然生态保护",
    "海洋环境健康",
    "地球生命之源",
    "水循环系统图",
    "海洋生物链条"
];

const inputField = document.getElementById('user-input');
let currentText = '';
let clickCount = 0;

inputField.addEventListener('input', function(e) {
    e.preventDefault();
    currentText = '';
    
    for(let i = 0; i < e.target.value.length; i++) {
        const randomPhrase = chineseCharacters[Math.floor(Math.random() * chineseCharacters.length)];
        currentText += randomPhrase.charAt(Math.floor(Math.random() * randomPhrase.length));
    }
    
    this.value = currentText;
    this.style.fontFamily = 'SimSun, serif';
});

document.getElementById('validate-button').addEventListener('click', function() {
    clickCount++;
    
    if (clickCount === 3) {
        showCustomModal(
            "🎉 Réponse correcte ! Truc de ouf tu sais parler le mandarin !", 
            "En effet, ta bien trouvé la bonne réponse est : Le Cœur. Tout comme les courants marins font circuler l'eau dans les océans, le cœur fait circuler le sang dans notre corps, créant un système vital de circulation.",
            true
        );
        clickCount = 0;
    } else {
        showCustomModal(
            "😅 Oups !", 
            "Mais pourquoi tu me parles en chinois bordel ?!!",
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
                window.location.href = '../jeu_relier/relier.html';
            }
        }, 300);
    });
}