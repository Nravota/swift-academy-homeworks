/*globals document, window, $ */
(function () {
  "use strict";

  var films = [];

  var TEMPLATE =

    "        <article id=\"%FILM-ID-1%\" class=\"film-item\">\n" +
    "          <div class=\"col-xs-4 film-poster\">\n" +
    "            <a href=\"https://www.themoviedb.org/movie/%FILM-ID%\" target=\"blank\">\n" +
    "              <img src=\"./img/missing.gif\" title=\"%FILM-TITLE%\" alt=\"%FILM-TITLE%\">\n" +
    "            </a>\n" +
    "          </div>\n" +
    "          <div class=\"col-xs-8 film-info\">\n" +
    "            <h3>\n" +
    "              <a href=\"#\">%FILM-TITLE%</a>\n" +
    "            </h3>\n" +
    "            <div class=\"year-genre\">\n" +
    "              <div>\n" +
    "                <i class=\"fa fa-calendar\"></i>\n" +
    "                <span class=\"year\">%YEAR%</span>\n" +
    "              </div>\n" +
    "              <div class=\"genre elipsis\">\n" +
    "                %GENRE%\n" +
    "              </div>\n" +
    "            </div>\n" +
    "            <div class=\"description\">\n" +
    "              <p>%DESCRIPTION%</p>\n" +
    "              <a class=\"read-more\" href=\"https://www.themoviedb.org/movie/%FILM-ID%\" target=\"blank\">more</a>\n" +
    "            </div>\n" +
    "            <div class=\"rating\">\n" +
    "              <span class=\"rating-value\">%RATING%</span>\n" +
    "              <i class=\"fa fa-star\"></i>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </article>\n"
     ;



  // Flms: https://api.themoviedb.org/3/discover/movie?api_key=2e83cf763cae99f3a4b1d282402e63cb
  // Genres: https://api.themoviedb.org/3/genre/movie/list?api_key=2e83cf763cae99f3a4b1d282402e63cb&language=en-US
  $.getJSON("./db/movies.json", function (data) {
    // your code here ...
        films = data;
        displayFilms(films);
  });

    // film.release_date.split("-")[0] === year;

    document.filtersForm.year.addEventListener("change", function () {

      var year = this.value;

      if (!year) {
          displayFilms(films);
      }
      else {
          var filteredFilms = films.filter(function(film) {
              return film.release_date.indexOf(year) > -1;
          });
          displayFilms(filteredFilms);
      }


  });

  document.filtersForm.sortBygenre.addEventListener("change", function () {

    var genre = this.value.toLocaleLowerCase();

    if (!genre) {
        displayFilms(films);
    }
    else {
        var filteredFilms = films.filter(function(film) {
            return film.genres.toLocaleLowerCase().indexOf(genre) > -1;
        });
        displayFilms(filteredFilms);
    }
    });


  document.filtersForm.keywords.addEventListener("keyup", function () {
      var value = event.target.value.toLocaleLowerCase();
      if (value.length > 2) {
          var filtered = films.filter(function (film) {
              return (film.original_title +" "+film.overview).toLocaleLowerCase().indexOf(value) > -1;
          });
          displayFilms(filtered);
      }
      else {
          displayFilms(films);
      }
    });


    document.filtersForm.sortBy.addEventListener("change", function () {

        films.forEach(function (film) {

            var sort = target.event.value;

            if (sort === "title-asc") {

                var titleAscending = film.original_title.sort();
                displayFilms(titleAscending);
            }
            if (sort === "title-desc") {

                var titleDescendig = film.original_title.sort().reverse();
                displayFilms(titleDescendig);
            }

            if (sort === "date-asc") {

                var yearAscending = film.release_date.split("-")[0].sort( function(a, b){return a - b;});
                displayFilms(yearAscending);
            }
            if (sort === "date-desc") {

                var yearDescending = film.release_date.split("-")[0].sort( function(a, b){return b - a;});
                displayFilms(yearDescending);
            }
            if (sort === "rating-asc") {

                var ratingAscending = film.vote_average.sort( function(a, b){return a - b;});
                displayFilms(ratingAscending);
            }
            if (sort === "rating-desc") {

                var ratingDescending= film.vote_average.sort( function(a, b){return b - a;});
                displayFilms(ratingDescending);
            }
       });
    });

  // document.getElementbyID("#collectionLink").addEventListener("click", function () {
  //       // your code here ...
  //   });
  //
  // document.getElementbyID("#aboutLInk").addEventListener("click", function () {
  //       // your code here ...
  //   });


  function displayFilms(list) {
    var collection = document.querySelector("#collection");
      collection.innerHTML = "";

    list.forEach(function (film) {

        var movieHTML = TEMPLATE
        .replace(/%FILM-TITLE%/g, film.original_title)
        .replace("%YEAR%", film.release_date)
        .replace("%GENRE%", film.genres)
        .replace("%DESCRIPTION%", film.overview)
        .replace("%RATING%", film.vote_average)
        .replace(/%FILM-ID%/g, film.id)
        .replace("\"./img/missing.gif\"", film.poster_path);



      var div = document.createElement("div");
          div.className = "col-md-6";
          div.innerHTML = movieHTML;
          collection.appendChild(div);

    });
  }

  window.addEventListener("scroll", function () {
    if (document.body.scrollTop > 200) {
      // your code here
        $("header nav").addClass("slim");
    }
    else {
      // your code here
        $("header nav").removeClass("slim");
    }
  });
})();
