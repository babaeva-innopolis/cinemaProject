"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var info = new URLSearchParams(location.search);
var filmid = info.get('id');

var getFilmData = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var filmData, header, description, poster;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return getFilmDetails(filmid).then(function (d) {
              return d.json();
            });

          case 2:
            filmData = _context.sent;
            header = document.getElementById('sf-header');
            description = document.getElementById('sf-desc');
            poster = document.getElementById('sf-poster');
            header.textContent = filmData.nameRu;
            description.textContent = filmData.description;
            poster.src = filmData.posterUrl;
            console.log(filmData);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getFilmData() {
    return _ref.apply(this, arguments);
  };
}();

var STAR_SELECTED_CLASS = '.sf-rating-star-selected';
var likes = document.getElementById('sf-like');

var getFilmMetaInfo = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var _yield$fetch$then, filmInfo, views, ratingNuber, rating, scoreLayout, stars, i, star;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fetch("http://inno-ijl.ru/multystub/stc-21/film/".concat(filmid)).then(function (d) {
              return d.json();
            });

          case 2:
            _yield$fetch$then = _context2.sent;
            filmInfo = _yield$fetch$then.body;
            views = document.getElementById('sf-views');
            views.textContent = "".concat(filmInfo.views, " Views");
            likes.textContent = "".concat(filmInfo.likes, " Likes");
            ratingNuber = filmInfo.ratings.reduce(function (a, b) {
              return a + b;
            }, 0) / filmInfo.ratings.length;
            rating = String(Math.round(ratingNuber * 10) / 10).padEnd(3, '.0');
            scoreLayout = document.getElementById('sf-rating-score');
            scoreLayout.textContent = rating;
            stars = document.querySelector('sf-rating-star');
            i = 0;

          case 13:
            if (!(i < stars.length)) {
              _context2.next = 21;
              break;
            }

            if (!(i >= ratingNuber - 1)) {
              _context2.next = 16;
              break;
            }

            return _context2.abrupt("break", 21);

          case 16:
            star = stars[i];
            star.classList.add(STAR_SELECTED_CLASS);

          case 18:
            i++;
            _context2.next = 13;
            break;

          case 21:
            console.log(filmInfo.body);

          case 22:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getFilmMetaInfo() {
    return _ref2.apply(this, arguments);
  };
}();

var likeIcon = document.querySelector('#sf-like-icon');
likeIcon.addEventListener('click', function () {
  fetch("http://inno-ijl.ru/multystub/stc-21/film/".concat(filmid, "/like"), {
    method: 'POST'
  });
  likeIcon.classList.add('like-icon-liked');
  likes.textContent = "".concat(filmInfo.likes, " Likes");
});
getFilmData();
getFilmMetaInfo();
//# sourceMappingURL=single.js.map