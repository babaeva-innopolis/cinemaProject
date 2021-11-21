"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var API_TOKEN = '5499449d-65c4-452f-b6e6-0f0ab98493a5';
var blockFilmsWrapper = document.getElementById('block-films-wrapper');
blockFilmsWrapper.innerHTML = '';

var getKinopoiskApiData = function getKinopoiskApiData(url) {
  return fetch(url, {
    headers: {
      accept: 'application/json',
      'X-API-KEY': '5499449d-65c4-452f-b6e6-0f0ab98493a5'
    }
  });
};

var getTopFilms = function getTopFilms() {
  return getKinopoiskApiData('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_AWAIT_FILMS&page=1');
};

var getFilmDetails = function getFilmDetails(id) {
  return getKinopoiskApiData("https://kinopoiskapiunofficial.tech/api/v2.2/films/".concat(id));
};

var getBlockFilmsData = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var answer, data;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return getTopFilms();

          case 2:
            answer = _context2.sent;
            _context2.next = 5;
            return answer.json();

          case 5:
            data = _context2.sent;
            data.films.forEach( /*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(film) {
                var filmDescId, answer, filmData, descElement;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        filmDescId = "block-films-des-".concat(film.filmId);
                        blockFilmsWrapper.innerHTML += "\n        <div class=\"block05__movie1\">\n            <div class=\"block05__bg\">   \n                 <img src=\"".concat(film.posterUrlPreview, "\" alt=\"\">\n             </div>\n             <div class=\"block05__shadow\"></div>\n             <div class=\"block05__descr\">\n                    <div class=\"block05__text2\">").concat(film.nameRu, "</div>\n                    <div class=\"block05__text3\" id=\"").concat(filmDescId, "\"></div>\n             </div>\n        </div>\n        ");
                        _context.next = 4;
                        return getFilmDetails(film.filmId);

                      case 4:
                        answer = _context.sent;
                        _context.next = 7;
                        return answer.json();

                      case 7:
                        filmData = _context.sent;
                        descElement = document.getElementById(filmDescId);
                        descElement.innerText = filmData.description;

                        if (!filmData.description) {
                          blockFilmsWrapper.removeChild(descElement.parentNode.parentNode);
                        }

                      case 11:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x) {
                return _ref2.apply(this, arguments);
              };
            }());

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getBlockFilmsData() {
    return _ref.apply(this, arguments);
  };
}();

getBlockFilmsData();