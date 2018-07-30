/* Changer la page affichée à droite */
function showPage(id) {
    // Cacher toutes les pages
    $('.page').hide();

    // Afficher la page souhaitée
    $('#' + id).show();

    // Retirer le comportement de 'href="#"', remontant tout en haut
    return false;
}

/* Exécuté lorsque la page est chargée */
$(function() {
    // Afficher par défaut la page présentation
    showPage('presentation');

    // Charger Foundation
    $(document).foundation();

    // Réinitialise la position de défilement lors du changement de taille d'écran
    $(window).resize(function() {
        $('html,body').scrollTop(0);
    });
});
