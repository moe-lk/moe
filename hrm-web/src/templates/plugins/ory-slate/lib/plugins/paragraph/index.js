'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.P = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Plugin2 = require('../Plugin');

var _Plugin3 = _interopRequireDefault(_Plugin2);

var _node = require('./node');

var _node2 = _interopRequireDefault(_node);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This file is part of ORY Editor.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * ORY Editor is free software: you can redistribute it and/or modify
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * it under the terms of the GNU Lesser General Public License as published by
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * the Free Software Foundation, either version 3 of the License, or
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * (at your option) any later version.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * ORY Editor is distributed in the hope that it will be useful,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * but WITHOUT ANY WARRANTY; without even the implied warranty of
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * GNU Lesser General Public License for more details.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You should have received a copy of the GNU Lesser General Public License
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * along with ORY Editor.  If not, see <http://www.gnu.org/licenses/>.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license LGPL-3.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright 2016-2018 Aeneas Rekkas
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author Aeneas Rekkas <aeneas+oss@aeneas.io>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/* eslint-disable prefer-reflect, default-case, react/display-name */


var P = exports.P = 'PARAGRAPH/PARAGRAPH';

var ParagraphPlugin = function (_Plugin) {
  _inherits(ParagraphPlugin, _Plugin);

  function ParagraphPlugin() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ParagraphPlugin);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ParagraphPlugin.__proto__ || Object.getPrototypeOf(ParagraphPlugin)).call.apply(_ref, [this].concat(args))), _this), _this.name = 'paragraph', _this.schema = {
      nodes: _defineProperty({}, P, _node2.default)
    }, _this.deserialize = function (el, next) {
      switch (el.tagName.toLowerCase()) {
        case 'p':
          return {
            object: 'block',
            type: P,
            nodes: next(el.childNodes)
            // data: Data.create({ textAlign: el.attr('styles')['text-align'] })
          };
      }
    }, _this.serialize = function (object, children) {
      if (object.object !== 'block') {
        return;
      }
      switch (object.type) {
        case P:
          return _react2.default.createElement(
            'p',
            { style: { textAlign: object.data.get('align') } },
            children
          );
      }
    }, _this.renderNode = function (props) {
      switch (props.node.type) {
        case P:
          {
            return _react2.default.createElement(_node2.default, props);
          }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return ParagraphPlugin;
}(_Plugin3.default);

exports.default = ParagraphPlugin;
//# sourceMappingURL=index.js.map