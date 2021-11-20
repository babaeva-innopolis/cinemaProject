"use strict";

var blockFilmsWrapper = document.getElementById('block-films-wrapper');
blockFilmsWrapper.innerHTML = '';
fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_AWAIT_FILMS&page=1', {
  headers: {
    accept: 'application/json',
    'X-API-KEY': '5499449d-65c4-452f-b6e6-0f0ab98493a5'
  }
}).then(function (answer) {
  return answer.json();
}).then(function (data) {
  data.films.forEach(function (film) {
    var filmDescId = "block-films-des-".concat(film.filmId);
    blockFilmsWrapper.innerHTML += "\n        <div class=\"block05__movie1\">\n            <div class=\"block05__bg\">   \n                 <img src=\"".concat(film.posterUrlPreview, "\" alt=\"\u0412\u044B\u0436\u0438\u0432\u0448\u0438\u0439\">\n             </div>\n             <div class=\"block05__shadow\"></div>\n             <div class=\"block05__descr\">\n                    <div class=\"block05__text2\">").concat(film.nameRu, "</div>\n                    <div class=\"block05__text3\" id=\"").concat(filmDescId, "\"></div>\n             </div>\n        </div>\n        ");
    fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/${film.filmId}', {
      headers: {
        accept: 'application/json',
        'X-API-KEY': '5499449d-65c4-452f-b6e6-0f0ab98493a5'
      }
    }).then(function (answer) {
      return answer.json();
    }).then(function (filmData) {
      var descElement = document.getElementById(filmDescId);
      descElement.innerText = filmData.description;

      if (!filmData.description) {
        blockFilmsWrapper.removeChild(descElement.parentNode.parentNode);
      }
    });
  });
});