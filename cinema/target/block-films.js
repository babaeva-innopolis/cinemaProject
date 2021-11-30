"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var API_TOKEN = '5499449d-65c4-452f-b6e6-0f0ab98493a5';
var blockFilmsWrapper = document.getElementById('block-films-wrapper');
blockFilmsWrapper.innerHTML = '';

var renderFilmBlock = function renderFilmBlock(title, posterUrl, id) {
  var link = document.createElement('a');
  link.href = "/single/?id=".concat(id);
  var wrapper = document.createElement('div');
  wrapper.classList.add('block05__movie1');
  var posterWrapper = document.createElement('div');
  posterWrapper.classList.add('block05__bg');
  var poster = document.createElement('img');
  poster.src = posterUrl;
  poster.alt = 'постер к фильму';
  posterWrapper.append(poster);
  var shadow = document.createElement('div');
  shadow.classList.add('block05__shadow');
  var descriptionWrapper = document.createElement('div');
  descriptionWrapper.classList.add('block05__descr');
  var name = document.createElement('div');
  name.classList.add('block05__text2');
  name.textContent = title;
  var description = document.createElement('div');
  description.classList.add('block05__text3');
  description.textContent = 'Loading...';
  wrapper.description = description;
  descriptionWrapper.append(name, description);
  wrapper.append(link);
  link.append(posterWrapper, shadow, descriptionWrapper);
  return [wrapper, description];
};

var getBlockFilmsData = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var answer, data, requests, filmsLayout, i, _iterator, _step, _step$value, id, filmLayout;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return getTopFilms();

          case 3:
            answer = _context3.sent;
            _context3.next = 6;
            return answer.json();

          case 6:
            data = _context3.sent;
            requests = [];
            filmsLayout = new Map();
            data.films.forEach( /*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(film, i) {
                var _renderFilmBlock, _renderFilmBlock2, filmBlock, description;

                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _renderFilmBlock = renderFilmBlock(film.nameRu, film.posterUrlPreview, film.filmId), _renderFilmBlock2 = _slicedToArray(_renderFilmBlock, 2), filmBlock = _renderFilmBlock2[0], description = _renderFilmBlock2[1];
                        filmsLayout.set(film.filmId, filmBlock);
                        requests.push(new Promise(function (resolve, reject) {
                          setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                            var _answer, filmData;

                            return regeneratorRuntime.wrap(function _callee$(_context) {
                              while (1) {
                                switch (_context.prev = _context.next) {
                                  case 0:
                                    _context.prev = 0;
                                    _context.next = 3;
                                    return getFilmDetails(film.filmId);

                                  case 3:
                                    _answer = _context.sent;
                                    _context.next = 6;
                                    return _answer.json();

                                  case 6:
                                    filmData = _context.sent;
                                    description.textContent = filmData.description;

                                    if (!filmData.description) {
                                      filmsLayout["delete"](film.filmId);
                                    }

                                    _context.next = 13;
                                    break;

                                  case 11:
                                    _context.prev = 11;
                                    _context.t0 = _context["catch"](0);

                                  case 13:
                                    resolve();

                                  case 14:
                                  case "end":
                                    return _context.stop();
                                }
                              }
                            }, _callee, null, [[0, 11]]);
                          })), i * 300);
                        }));

                      case 3:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));

              return function (_x, _x2) {
                return _ref2.apply(this, arguments);
              };
            }());
            _context3.next = 12;
            return Promise.all(requests);

          case 12:
            i = 0;
            _iterator = _createForOfIteratorHelper(filmsLayout);
            _context3.prev = 14;

            _iterator.s();

          case 16:
            if ((_step = _iterator.n()).done) {
              _context3.next = 24;
              break;
            }

            _step$value = _slicedToArray(_step.value, 2), id = _step$value[0], filmLayout = _step$value[1];
            blockFilmsWrapper.append(filmLayout);
            i++;

            if (!(i === 9)) {
              _context3.next = 22;
              break;
            }

            return _context3.abrupt("break", 24);

          case 22:
            _context3.next = 16;
            break;

          case 24:
            _context3.next = 29;
            break;

          case 26:
            _context3.prev = 26;
            _context3.t0 = _context3["catch"](14);

            _iterator.e(_context3.t0);

          case 29:
            _context3.prev = 29;

            _iterator.f();

            return _context3.finish(29);

          case 32:
            _context3.next = 37;
            break;

          case 34:
            _context3.prev = 34;
            _context3.t1 = _context3["catch"](0);
            console.error(_context3.t1);

          case 37:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 34], [14, 26, 29, 32]]);
  }));

  return function getBlockFilmsData() {
    return _ref.apply(this, arguments);
  };
}();

getBlockFilmsData();
//# sourceMappingURL=block-films.js.map