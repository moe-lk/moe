'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.U = exports.EM = exports.STRONG = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FormatBold = require('@material-ui/icons/FormatBold');

var _FormatBold2 = _interopRequireDefault(_FormatBold);

var _FormatItalic = require('@material-ui/icons/FormatItalic');

var _FormatItalic2 = _interopRequireDefault(_FormatItalic);

var _FormatUnderlined = require('@material-ui/icons/FormatUnderlined');

var _FormatUnderlined2 = _interopRequireDefault(_FormatUnderlined);

var _helpers = require('../helpers');

var _Plugin2 = require('./Plugin');

var _Plugin3 = _interopRequireDefault(_Plugin2);

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


var STRONG = exports.STRONG = 'EMPHASIZE/STRONG';
var EM = exports.EM = 'EMPHASIZE/EM';
var U = exports.U = 'EMPHASIZE/U';

// eslint-disable-next-line react/display-name
var createButton = function createButton(type, icon) {
  return function (_ref) {
    var editorState = _ref.editorState,
        onChange = _ref.onChange;

    var onClick = function onClick(e) {
      e.preventDefault();
      onChange({
        value: editorState.change().toggleMark(type).value
      });
    };

    var isActive = editorState && editorState.activeMarks.some(function (mark) {
      return mark.type === type;
    });

    return _react2.default.createElement(_helpers.ToolbarButton, { onClick: onClick, isActive: isActive, icon: icon });
  };
};

var EmphasizePlugin = function (_Plugin) {
  _inherits(EmphasizePlugin, _Plugin);

  function EmphasizePlugin() {
    var _ref2, _marks;

    var _temp, _this, _ret;

    _classCallCheck(this, EmphasizePlugin);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = EmphasizePlugin.__proto__ || Object.getPrototypeOf(EmphasizePlugin)).call.apply(_ref2, [this].concat(args))), _this), _this.name = 'emphasize', _this.schema = {
      marks: (_marks = {}, _defineProperty(_marks, STRONG, (0, _helpers.makeTagMark)('strong')), _defineProperty(_marks, EM, (0, _helpers.makeTagMark)('em')), _defineProperty(_marks, U, (0, _helpers.makeTagMark)('u')), _marks)
    }, _this.onKeyDown = function (e, data, state) {
      if (data.isMod) {
        var mark = void 0;

        switch (data.key) {
          case 'b':
            mark = STRONG;
            break;
          case 'i':
            mark = EM;
            break;
          case 'u':
            mark = U;
            break;
          default:
            return;
        }

        return state.change().toggleMark(mark).value;
      }
    }, _this.hoverButtons = [createButton(STRONG, _react2.default.createElement(_FormatBold2.default, null)), createButton(EM, _react2.default.createElement(_FormatItalic2.default, null)), createButton(U, _react2.default.createElement(_FormatUnderlined2.default, null))], _this.deserialize = function (el, next) {
      switch (el.tagName.toLowerCase()) {
        case 'strong':
        case 'b':
          return {
            object: 'mark',
            type: STRONG,
            nodes: next(el.childNodes)
          };
        case 'em':
        case 'i':
          return {
            object: 'mark',
            type: EM,
            nodes: next(el.childNodes)
          };
        case 'u':
          return {
            object: 'mark',
            type: U,
            nodes: next(el.childNodes)
          };
      }
    }, _this.serialize = function (object, children) {
      if (object.object !== 'mark') {
        return;
      }
      switch (object.type) {
        case STRONG:
          return _react2.default.createElement(
            'strong',
            null,
            children
          );
        case EM:
          return _react2.default.createElement(
            'em',
            null,
            children
          );
        case U:
          return _react2.default.createElement(
            'u',
            null,
            children
          );
      }
    }, _this.renderMark = function (props) {
      var children = props.children,
          mark = props.mark,
          attributes = props.attributes;


      switch (mark.type) {
        case STRONG:
          return _react2.default.createElement(
            'strong',
            attributes,
            children
          );
        case EM:
          return _react2.default.createElement(
            'em',
            attributes,
            children
          );
        case U:
          return _react2.default.createElement(
            'u',
            attributes,
            children
          );
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return EmphasizePlugin;
}(_Plugin3.default);

exports.default = EmphasizePlugin;
//# sourceMappingURL=emphasize.js.map