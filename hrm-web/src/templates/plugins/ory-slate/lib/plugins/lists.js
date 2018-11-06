'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LI = exports.OL = exports.UL = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _List = require('@material-ui/icons/List');

var _List2 = _interopRequireDefault(_List);

var _FormatListNumbered = require('@material-ui/icons/FormatListNumbered');

var _FormatListNumbered2 = _interopRequireDefault(_FormatListNumbered);

var _FormatIndentIncrease = require('@material-ui/icons/FormatIndentIncrease');

var _FormatIndentIncrease2 = _interopRequireDefault(_FormatIndentIncrease);

var _FormatIndentDecrease = require('@material-ui/icons/FormatIndentDecrease');

var _FormatIndentDecrease2 = _interopRequireDefault(_FormatIndentDecrease);

var _slateEditList = require('slate-edit-list');

var _slateEditList2 = _interopRequireDefault(_slateEditList);

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


var UL = exports.UL = 'LISTS/UNORDERED-LIST';
var OL = exports.OL = 'LISTS/ORDERED-LIST';
var LI = exports.LI = 'LISTS/LIST-ITEM';

var INCREASE_INDENT = 'INCREASE_INDENT';
var DECREASE_INDENT = 'DECREASE_INDENT';

var ListsPlugin = function (_Plugin) {
  _inherits(ListsPlugin, _Plugin);

  function ListsPlugin(props) {
    _classCallCheck(this, ListsPlugin);

    var _this = _possibleConstructorReturn(this, (ListsPlugin.__proto__ || Object.getPrototypeOf(ListsPlugin)).call(this, props));

    _initialiseProps.call(_this);

    _this.DEFAULT_NODE = props.DEFAULT_NODE;
    _this.plugin = (0, _slateEditList2.default)({
      types: [UL, OL],
      typeItem: LI,
      typeDefault: props.DEFAULT_NODE
    });
    _this.plugins = [_this.plugin];
    return _this;
  }

  // eslint-disable-next-line react/display-name


  return ListsPlugin;
}(_Plugin3.default);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this,
      _nodes;

  this.createButton = function (type, icon) {
    return function (_ref) {
      var editorState = _ref.editorState,
          onChange = _ref.onChange;
      var _plugin$changes = _this2.plugin.changes,
          wrapInList = _plugin$changes.wrapInList,
          unwrapList = _plugin$changes.unwrapList,
          increaseItemDepth = _plugin$changes.increaseItemDepth,
          decreaseItemDepth = _plugin$changes.decreaseItemDepth;

      var onClick = function onClick(e) {
        e.preventDefault();

        var change = editorState.change();

        if (type !== UL && type !== OL) {
          if (type === INCREASE_INDENT) {
            increaseItemDepth(change);
          } else {
            decreaseItemDepth(change);
          }
        } else {
          var _inList = _this2.plugin.utils.isSelectionInList(editorState);
          if (_inList) {
            unwrapList(change, type);
          } else {
            wrapInList(change, type);
          }
        }

        onChange({ value: change.value });
      };

      var inList = _this2.plugin.utils.isSelectionInList(editorState);
      var isType = editorState.blocks.some(function (block) {
        return !!editorState.document.getClosest(block.key, function (parent) {
          return parent.type === type;
        });
      });
      var isIncreaseDecrease = type === INCREASE_INDENT || type === DECREASE_INDENT;

      var previousItem = _this2.plugin.utils.getPreviousItem(editorState);
      var currentItem = _this2.plugin.utils.getCurrentItem(editorState);
      var itemDepth = _this2.plugin.utils.getItemDepth(editorState);

      var canIncreaseIndent = previousItem && currentItem && isIncreaseDecrease;
      var canDecreaseIndent = itemDepth > 1 && currentItem && isIncreaseDecrease;

      var increaseDecreaseDisabled = type === INCREASE_INDENT ? !canIncreaseIndent : !canDecreaseIndent;

      return _react2.default.createElement(_helpers.ToolbarButton, {
        onClick: onClick,
        isActive: inList && isType,
        icon: icon,
        disabled: isIncreaseDecrease && increaseDecreaseDisabled
      });
    };
  };

  this.name = 'lists';
  this.schema = {
    nodes: (_nodes = {}, _defineProperty(_nodes, UL, (0, _helpers.makeTagNode)('ul')), _defineProperty(_nodes, OL, (0, _helpers.makeTagNode)('ol')), _defineProperty(_nodes, LI, (0, _helpers.makeTagNode)('li')), _nodes)
  };
  this.toolbarButtons = [this.createButton(UL, _react2.default.createElement(_List2.default, null)), this.createButton(OL, _react2.default.createElement(_FormatListNumbered2.default, null)), this.createButton(INCREASE_INDENT, _react2.default.createElement(_FormatIndentIncrease2.default, null)), this.createButton(DECREASE_INDENT, _react2.default.createElement(_FormatIndentDecrease2.default, null))];

  this.deserialize = function (el, next) {
    switch (el.tagName.toLowerCase()) {
      case 'ul':
        return {
          object: 'block',
          type: UL,
          nodes: next(el.childNodes)
        };
      case 'li':
        return {
          object: 'block',
          type: LI,
          nodes: next(el.childNodes)
        };
      case 'ol':
        return {
          object: 'block',
          type: OL,
          nodes: next(el.childNodes)
        };
    }
  };

  this.serialize = function (object, children) {
    if (object.object !== 'block') {
      return;
    }
    switch (object.type) {
      case UL:
        return _react2.default.createElement(
          'ul',
          null,
          children
        );
      case LI:
        return _react2.default.createElement(
          'li',
          null,
          children
        );
      case OL:
        return _react2.default.createElement(
          'ol',
          null,
          children
        );
    }
  };

  this.renderNode = function (props) {
    var children = props.children,
        attributes = props.attributes;

    switch (props.node.type) {
      case UL:
        return _react2.default.createElement(
          'ul',
          attributes,
          children
        );
      case LI:
        return _react2.default.createElement(
          'li',
          attributes,
          children
        );
      case OL:
        return _react2.default.createElement(
          'ol',
          attributes,
          children
        );
    }
  };
};

exports.default = ListsPlugin;
//# sourceMappingURL=lists.js.map