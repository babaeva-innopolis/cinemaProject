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
            _context2.prev = 0;
            _context2.next = 3;
            return getTopFilms();

          case 3:
            answer = _context2.sent;
            _context2.next = 6;
            return answer.json();

          case 6:
            data = _context2.sent;
            data.films.forEach( /*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(film) {
                var wrapper, posterWrapper, poster, shadow, descriptionWrapper, name, description, answer, filmData;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        wrapper = document.createElement('div');
                        wrapper.classList.add('block05__movie1');
                        posterWrapper = document.createElement('div');
                        posterWrapper.classList.add('block05__bg');
                        poster = document.createElement('img');
                        poster.src = film.posterUrlPreview;
                        poster.alt = 'постер к фильму';
                        posterWrapper.append(poster);
                        shadow = document.createElement('div');
                        shadow.classList.add('block05__shadow');
                        descriptionWrapper = document.createElement('div');
                        descriptionWrapper.classList.add('block05__descr');
                        name = document.createElement('div');
                        name.textContent = film.nameRu;
                        description = document.createElement('div');
                        description.classList.add('block05__text3');
                        description.textContent = 'Loading...';
                        descriptionWrapper.append(name, description);
                        wrapper.append(posterWrapper, shadow, descriptionWrapper);
                        blockFilmsWrapper.append(wrapper);
                        _context.next = 22;
                        return getFilmDetails(film.filmId);

                      case 22:
                        answer = _context.sent;
                        _context.next = 25;
                        return answer.json();

                      case 25:
                        filmData = _context.sent;
                        description.textContent = filmData.description;

                        if (!filmData.description) {
                          wrapper.remove();
                        }

                      case 28:
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
            _context2.next = 13;
            break;

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](0);
            console.error(_context2.t0);

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 10]]);
  }));

  return function getBlockFilmsData() {
    return _ref.apply(this, arguments);
  };
}();

getBlockFilmsData();