"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Film = /*#__PURE__*/function () {
  function Film(film) {
    _classCallCheck(this, Film);

    this._data = film;
    this.time = "".concat(getTime(9, 11), ":").concat(getTime(0, 60));
  }

  _createClass(Film, [{
    key: "isNotForAdult",
    value: function isNotForAdult() {
      return this._data.rate !== 'R' && this._data.rate !== 'NC-17';
    }
  }, {
    key: "getTitle",
    value: function getTitle() {
      return this._data.title || this._data.name;
    }
  }, {
    key: "getTime",
    value: function getTime() {
      return this.time;
    }
  }, {
    key: "getGenres",
    value: function getGenres() {
      return this._data.genres.join(', ');
    }
  }, {
    key: "getId",
    value: function getId() {
      return this._data.id || "${this._data.name.replaceAll(' ','-')}-${this._data.time}";
    }
  }, {
    key: "renderFilmTableItem",
    value: function renderFilmTableItem() {
      return "\n        <tr class=\"movie-table__row-tbody table-tbody\"> \n        <td>\n        <input \n        type=\"checkbox2\"\n        class=\"block03__checkbox2\"\n        id= \"".concat(this.getId(), "\"\n        />\n        <label for=\"").concat(this.getId(), "\">\n        <svg class=\"check\"\n        width=\".55rem\"\n         height=\".45rem\" \n         viewBox=\"0 0 11 9\" \n         fill=\"none\" \n         xmlns=\"http://www.w3.org/2000/svg\">\n    <path fill-rule=\"evenodd\" \n    clip-rule=\"evenodd\" d=\"M4.60581 8.79378L1.46056 5.93033L0.787354 6.66979L4.70255 10.2342L10.8223 2.94099L10.0562 2.2982L4.60581 8.79378Z\" fill=\"white\"/>\n    </svg>\n    \n        </label>\n      </td>                            \n        <td>").concat(this.getTime(), "</td>\n        <td>").concat(this.getTitle(), "</td>\n        <td>").concat(this.getGenres(), "</td>\n    </tr>\n    ");
    }
  }]);

  return Film;
}();
//# sourceMappingURL=film.js.map