'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _styles = require('@material-ui/core/styles');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactPortal = require('react-portal');

var _selectionPosition = require('selection-position');

var _selectionPosition2 = _interopRequireDefault(_selectionPosition);

var _slateReact = require('slate-react');

var _oryEditorUi = require('ory-editor-ui');

var _const = require('../const');

var _hooks = require('../hooks.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

/* eslint-disable no-alert, prefer-reflect, no-underscore-dangle */


var onBlur = function onBlur(_event, _data, state) {
  return state;
};

var theme = (0, _styles.createMuiTheme)({
  palette: {
    type: 'dark'
  }
});

var Slate = function (_Component) {
  _inherits(Slate, _Component);

  function Slate() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Slate);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Slate.__proto__ || Object.getPrototypeOf(Slate)).call.apply(_ref, [this].concat(args))), _this), _this.componentDidMount = function () {
      _this.selection = window.getSelection();
      _this.updateToolbar();
    }, _this.shouldComponentUpdate = function (nextProps) {
      return nextProps.state.editorState !== _this.props.state.editorState || nextProps.state.toolbar !== _this.props.state.toolbar || nextProps.focused !== _this.props.focused || nextProps.readOnly !== _this.props.readOnly;
    }, _this.componentDidUpdate = function () {
      return _this.updateToolbar();
    }, _this.onStateChange = function (_ref2) {
      var value = _ref2.value;

      _this.props.onChange({ editorState: value });
    }, _this.handleOpen = function (portal) {
      // this.toolbar = portal.firstChild
    }, _this.updateToolbar = function () {
      var editorState = _this.props.state.editorState;

      var toolbar = _this.toolbar;

      if (!toolbar || editorState.isBlurred || editorState.selection.isCollapsed) {
        return;
      }
      var pos = (0, _selectionPosition2.default)();
      if (pos) {
        var _position = (0, _selectionPosition2.default)(),
            left = _position.left,
            top = _position.top,
            width = _position.width;

        toolbar.style.opacity = 1;
        toolbar.style.top = top + window.scrollY - toolbar.offsetHeight + 'px';
        toolbar.style.left = left + window.scrollX - toolbar.offsetWidth / 2 + width / 2 + 'px';
      }
    }, _this.onPaste = function (e, data, state) {
      if (data.type !== 'html') return;
      if (data.isShift) return;

      var _serializer$deseriali = _hooks.html.deserialize(data.html),
          document = _serializer$deseriali.document;

      return state.change().insertFragment(document);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Slate, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          focused = _props.focused,
          readOnly = _props.readOnly,
          editorState = _props.state.editorState,
          plugins = _props.plugins,
          onKeyDown = _props.onKeyDown,
          HoverButtons = _props.HoverButtons,
          ToolbarButtons = _props.ToolbarButtons,
          focus = _props.focus;

      var isOpened = editorState.selection.isExpanded && editorState.isFocused;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactPortal.Portal,
          { onOpen: this.handleOpen },
          _react2.default.createElement(
            _oryEditorUi.ThemeProvider,
            { theme: theme },
            _react2.default.createElement(
              'div',
              {
                className: 'ory-prevent-blur ory-plugins-content-slate-inline-toolbar ' + (isOpened ? '' : 'ory-plugins-content-slate-inline-toolbar--hidden'),
                style: { padding: 0 },
                ref: function ref(toolbar) {
                  _this2.toolbar = toolbar;
                  toolbar && _this2.updateToolbar();
                }
              },
              _react2.default.createElement(HoverButtons, {
                editorState: editorState,
                onChange: this.onStateChange,
                focus: focus
              })
            )
          )
        ),
        _react2.default.createElement(_slateReact.Editor, {
          onChange: this.onStateChange,
          onKeyDown: onKeyDown,
          readOnly: Boolean(readOnly),
          className: 'ory-plugins-content-slate-container',
          onBlur: onBlur,
          value: editorState,
          plugins: plugins,
          onPaste: this.onPaste,
          placeholder: _const.placeholder
        }),
        readOnly ? null : _react2.default.createElement(
          _oryEditorUi.BottomToolbar,
          { open: focused },
          _react2.default.createElement(ToolbarButtons, {
            editorState: editorState,
            onChange: this.onStateChange,
            focus: focus
          })
        )
      );
    }
  }]);

  return Slate;
}(_react.Component);

exports.default = Slate;
//# sourceMappingURL=index.js.map