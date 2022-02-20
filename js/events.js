// FONCTION DE CALLBACK D'EVENT

// EN CLIQUANT SUR LE BOUTON DE RECHERCHE, DANS CETTE FONCTION ON RECUPERE LA VALEUR DE L'INPUT ET ON APPELLE LA FONCTON GETMOVIE EN TRANSMETTANT UN ARGUMENT CETTE VALEUR
function onClickSearchMovies(e) {
  e.preventDefault();
  // récupérer de la valeur de l'input
  let searchInput = $("input[name=search]").val();
  console.log(searchInput);
  // supprimer la class hide sur la balise avec l'id list
  $("#list").removeClass("hide");
  // appel de la fonction pour récupérer tous les films
  getMovies(searchInput);
}

// EN CLIQUANT SUR UN LI, CELA DECLENCHE CETTE FONCTION EN RECUPERANT SON DATA-ID
// ON APPELLE LA FONCTION SHOWONEMOVIE EN TRANSMETTANT UN ARGUMENT
function onClickShowOneMovie() {
  // récupérer le data-id de l'élément cliqué
  // console.log(this);
  let movieId = $(this).data("id");
  console.log(movieId);

  // ajuster le CSS de l'id list à 30% de width
  $("#list").css("width", "30%");

  // supprimer la class hide sur la balise avec l'id result
  $("#result").removeClass("hide");

  // appel de la fonction pour récupérer un film
  showOneMovie(movieId);
}
