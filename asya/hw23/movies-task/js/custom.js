/*globals document, window, $ */
(function () {
  "use strict";

  var films = [];

  var TEMPLATE = "" +
    "  <article id=\"%FILM-ID-1%\" class=\"film-item\">\n" +
    "    <div class=\"col-xs-4 film-poster\">\n" +
    "      <a href=\"https://www.themoviedb.org/movie/%FILM-ID%\" target=\"blank\">\n" +
    "      <img src=\"%IMAGE-URL%\" title=\"%FILM-TITLE%\" alt=\"%FILM-TITLE%\">\n" +
    "      </a>\n" +
    "    </div>\n" +
    "    <div class=\"col-xs-8 film-info\">\n" +
    "      <h3>\n" +
    "        <a href=\"#\">%FILM-TITLE%</a>\n" +
    "      </h3>\n" +
    "      <div class=\"year-genre\">\n" +
    "        <div>\n" +
    "          <i class=\"fa fa-calendar\"></i>\n" +
    "          <span class=\"year\">%YEAR%</span>\n" +
    "        </div>\n" +
    "        <div class=\"genre elipsis\">\n" +
    "          %GENRE%\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"description\">\n" +
    "        <p>%DESCRIPTION%</p>\n" +
    "        <a class=\"read-more\" href=\"https://www.themoviedb.org/movie/%FILM-ID%\" target=\"blank\">more</a>\n" +
    "      </div>\n" +
    "      <div class=\"rating\">\n" +
    "        <span class=\"rating-value\">%RATING%</span>\n" +
    "        <i class=\"fa fa-star\"></i>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </article>\n";

  // Flms: https://api.themoviedb.org/3/discover/movie?api_key=2e83cf763cae99f3a4b1d282402e63cb
  // Genres: https://api.themoviedb.org/3/genre/movie/list?api_key=2e83cf763cae99f3a4b1d282402e63cb&language=en-US
  $.getJSON("./db/movies.json", function (data) {
    films = data;
    displayFilms(films);
  });

    document.filtersForm.year.addEventListener("change", function () {
        var year = this.value;
        if (!year) {
            displayFilms(films);
        }
        else {
            var newList = films.filter(function(film) {
                return film.release_date.indexOf(year) > -1;
            });
            displayFilms(newList);
        }
    });

//    function filterByGenre(films, genre) {
//        return films.filter(function (film) {
//            return film.genre === genreFilter;
//        });
//    }
//    document.filtersForm.sortBy.addEventListener("change", function () {
//        var genreFilter = this.getAttribute("sortBy");
//        var filteredFilms = filterByGenre(films, genre);
//        displayFilms(filteredFilms);
//    });
    
    
    document.filtersForm.sort-by.addEventListener("change", function () {
        var sortBy = this.value;
        if (!sortBy) {
            displayFilms(films);
        }
        else {
            var newSort = films.filter(function(film) {
                return film.genres === genres;
            });
            displayFilms(newSort);
        }
    });

    $("#sort-by option").change(function () {
        var value = this.value;
        var sorted = films.sort (function (a,b) {
            if (a.original_title < b.original_title){
               return -1;
            }
            else if (a.original_title > b.original_title){
               return 1;
            }
            return 0;
            });
        
        var date = films.sort (function (a,b) {
            if (a.release_date.substring(0, 4) < b.release_date.substring(0, 4)){
               return -1;
            }
            else if (a.release_date.substring(0, 4) > b.release_date.substring(0, 4)){
               return 1;
            }
            return 0;
            
            });
                
        var raiting = films.sort (function (a,b) {
            if (a.vote_average < b.vote_average){
              return -1;
            }
            else if (a.vote_average > b.vote_average){
              return 1;
            }
              return 0;
            
            });
        
        if (value === "title-asc"){
            displayFilms(sorted);
        }
        else if (value === "title-desc") {
            displayFilms(sorted.reverse());
        } 
        else if (value === "date-asc"){
            displayFilms(date);
        }
        else if (value === "date-desc") {
            displayFilms(date.reverse());
        } 
        else if (value === "raiting-asc"){
            displayFilms(raiting);
        }
        else if (value === "raiting-desc") {
            displayFilms(raiting.reverse());
        } 
        else {
            displayFilms(films);
        }
    });
                                                     
  function displayFilms(list) {
    var collection = document.querySelector("#collection");
    collection.innerHTML = "";

    list.forEach(function (film) {
      var html = TEMPLATE
        .replace("%YEAR%", film.release_date)
        .replace("%DESCRIPTION%", film.overview)
        .replace(/%FILM-TITLE%/g, film.title)
        .replace("%GENRE%", film.genres)
        .replace("%IMAGE-URL%", film.poster_path)
        .replace("%RATING%", film.vote_average)
        .replace(/%FILM-ID%/g, film.id)
      var div = document.createElement("div");
      div.className = "col-md-6";
      div.innerHTML = html;
      collection.appendChild(div);
    });
  }

    $("#home-link").on("click", function () {
        $("#collection").load("./partials/_home.html");
        $("#filters").addClass("hidden");
        $(".pagination").addClass("hidden");
    });
    
  window.addEventListener("scroll", function () {
    if (document.body.scrollTop > 200) {
      document.querySelector("#header nav").classList.add("slim");
    } else {
      document.querySelector("#header nav").classList.remove("slim");
    }
  });
})();
