/* global $,document*/

(function () {
  "use strict";

    var films;

    $.getJSON('films.json', function (data) {
      films = data;
      displayFilms(films);
    });

  var TEMPLATE = '' +
    '<div class="col-md-3 col-sm-6 col-xs-12">' +
    '<div class="thumbnail">' +
    '  <img src="%IMAGE_URL%" alt="%IMAGE_ALT%">' +
    '  <div class="caption">' +
    '    <h3>%FILM_TITLE%</h3>' +
    '    <p>(%FILM_YEAR%)</p>' +
    '    <p>Link to <a href="%FILM_URL%" target="_blank"><button class="btn btn-warning">IMDB</button></a></p>' +
    '  </div>' +
    '  </div>' +
    '</div>';


  function displayFilms() {
    var filmsList = films;
    for (var i = 0; i < filmsList.length; i++) {
      var filmHTML = TEMPLATE
      .replace("%IMAGE_URL%", films[i].imgUrl)
      .replace("%IMAGE_ALT%", films[i].title)
      .replace("%FILM_TITLE%", films[i].title)
      .replace("%FILM_YEAR%", films[i].year)
      .replace("%FILM_URL%", films[i].url);
      $('#collection').append(filmHTML);
    }
  }
  $("collection").innerHTML = displayFilms();


  $("#fetch-about").on("click", function () {
    $("#info-html").load("_about.html");
  });
//  
//  $(document).ready(function(){
//    $("fetch-about").click(function(){
//      $("#info-html").load("_about.html");
//    });
//  });

  
})();
