// Exemple de script pour afficher une alerte après soumission du formulaire de contact
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêcher l'envoi réel du formulaire
    alert("Merci pour votre message !");
});
