// CREATION D'UN ECOUTEUR SUR LE BOUTON DE RECHERCHE
$("#send").on("click", onClickSearchMovies);

// CREATION D'UN ECOUTEUR SUR LE LI DES ELEMENTS DE LA RECHERCHE, SI PAS DE LI ON ECOUTE SUR LE DOCUMENT !!
$(document).on("click", "#list li", onClickShowOneMovie);
