// CLE API
const API_KEY = "9cfbfed37ee7ed1d19e836bcd6587877";

// URL_IMG
const URL_IMG = "https://image.tmdb.org/t/p/w185_and_h278_bestv2"; //image.tmdb.org/t/p/original

// FUNCTION AJAX QUI VA RECUPERER TOUS LES FILMS PAR RAPPORT A SON ARGUMENT + AFFICHAGE DE LA LISTE
function getMovies(movieName) {
  console.log(movieName);
  // requete AJAX
  let req = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movieName}`;
  $.ajax({
    url: req,
    success: function (res) {
      // resolution de la requete
      console.log(res);
      // initialiser le resultat dans une variable
      let data = res.results;
      // initialiser une variable avec la création d'un <ul>
      let list = $("<ul>");
      // boucle sur notre resultat
      for (let i = 0; i < data.length; i++) {
        // ajouter à notre liste un data-id et le titre pour chaque élément
        list.append($(`<li data-id=${data[i].id}>`).append(data[i].title));
      }
      // injecter cette liste dans notre html
      $("#list").html(list);
    },
  });
}

// FUNCTION AJAX QUI VA RECUPERER LES DETAILS D'UN FILM PAR RAPPORT A SON ARGUMENT + AFFICHAGE
function showOneMovie(id) {
  console.log("showOneMovie :", id);
  // requete AJAX
  $.ajax({
    url: `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`,
  }).done((res) => {
    //resolution de la requete
    // initialisation de variables
    // div
    let result = $("<div>");
    // img, son attribut src et sa width à 250px
    let img = $("<img>")
      .attr("src", URL_IMG + res.poster_path)
      .css("width", "250px"); //https://image.tmdb.org/t/p/w185_and_h278_bestv2/h9XsZwfzrwGuMCv3zA0PZX4Bhv0.jpg"
    // h1 avec injection du title
    let title = $("<h1>").append(res.title);
    // h2 avec injection de la date de sortie
    let date = $("<h2>").append(res.release_date);
    // p avec injection de la description
    let desc = $("<p>").append(res.overview);
    // p avec injection de la note moyenne
    let note = $("<p>").append(res.vote_average);

    // div avec injection d'un h2 pour titre "Companies"
    // injection de cette div aprés notre ul (append)
    let companies = $("<div>").append("<h2>Companies</h2>");
    companies.append("<ul>");
    // on append tout ça à notre result
    result
      .append(img)
      .append(title)
      .append(date)
      .append(desc)
      .append(note)
      .append(companies);
    // on injecte result dans notre html dans la balise result
    $("#result").html(result);

    console.log(res);

    // affichage des companies
    // boucle, a chaque tour va appeler getCompanyWebSite en transmettant l'id du film
    for (let i = 0; i < res.production_companies.length; i++) {
      getCompanyWebSite(res.production_companies[i].id);
    }
  });
}

/*************************/
/****** EN DERNIER *******/
/*************************/

// FONCTION POUR RECUPERER LES COMPAGNIES QUI ONT CREE CE FILM
function getCompanyWebSite(id) {
  console.log("getCompanyWebSite", id);
  // requete ajax
  $.ajax(`https://api.themoviedb.org/3/company/${id}?api_key=${API_KEY}`)
    // resolved -> callback vers displayCompany
    .done(displayCompany);
  // resolved -> callback vers displayCompany
}

// FONCTION APPELE EN RESOLUTION DE LA REQUETE AJAX CI-DESSUS
function displayCompany(res) {
  console.log(res);
  // on append notre response dans notre result ul
  $("#result ul").append(`<li><a href=${res.homepage}>${res.name}</a></li>`);
}
