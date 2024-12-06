// Fonction pour vérifier la réponse du rébus avec des synonymes
function showModalGagne() {
    const modalGagne = document.getElementById("modalGagne");
    modalGagne.classList.add('show');


}

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi réel du formulaire pour la vérification

    // Liste des synonymes pour chaque mot du rébus
    const synonymes = {
        "les": ["les", "ces", "ceux"],
        "dechets": ["dechets", "ordures", "poubelle", "detritus"],
        "sont": ["sont"],
        "la": ["la"],
        "maladie": ["maladie", "infection", "pathologie"],
        "des": ["des", "de"],
        "hommes": ["hommes", "individus", "personnes", "humains"]
    };

    // Récupérer les valeurs des champs de texte et les comparer avec les synonymes
    const reponseLes = document.getElementById('les').value.trim().toLowerCase();
    const reponseDechets = document.getElementById('dechets').value.trim().toLowerCase();
    const reponseSont = document.getElementById('sont').value.trim().toLowerCase();
    const reponseLa = document.getElementById('la').value.trim().toLowerCase();
    const reponseMaladie = document.getElementById('maladie').value.trim().toLowerCase();
    const reponseDes = document.getElementById('des').value.trim().toLowerCase();
    const reponseHommes = document.getElementById('hommes').value.trim().toLowerCase();

    // Vérification des synonymes
    if (
        synonymes["les"].includes(reponseLes) &&
        synonymes["dechets"].includes(reponseDechets) &&
        synonymes["sont"].includes(reponseSont) &&
        synonymes["la"].includes(reponseLa) &&
        synonymes["maladie"].includes(reponseMaladie) &&
        synonymes["des"].includes(reponseDes) &&
        synonymes["hommes"].includes(reponseHommes)
    ) {
        // Si toutes les réponses sont correctes, afficher un message de succès
        showModalGagne();
    } else {
        // Si une ou plusieurs réponses sont incorrectes, afficher un message d'erreur
        alert("Désolé, ce n'est pas la bonne réponse. Essayez encore !");
    }
});
