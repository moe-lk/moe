'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.H6 = exports.H5 = exports.H4 = exports.H3 = exports.H2 = exports.H1 = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _LooksOne = require('@material-ui/icons/LooksOne');

var _LooksOne2 = _interopRequireDefault(_LooksOne);

var _LooksTwo = require('@material-ui/icons/LooksTwo');

var _LooksTwo2 = _interopRequireDefault(_LooksTwo);

var _Looks = require('@material-ui/icons/Looks3');

var _Looks2 = _interopRequireDefault(_Looks);

var _Looks3 = require('@material-ui/icons/Looks4');

var _Looks4 = _interopRequireDefault(_Looks3);

var _Looks5 = require('@material-ui/icons/Looks5');

var _Looks6 = _interopRequireDefault(_Looks5);

var _Looks7 = require('@material-ui/icons/Looks6');

var _Looks8 = _interopRequireDefault(_Looks7);

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

// import { Data } from 'slate'


var H1 = exports.H1 = 'HEADINGS/HEADING-ONE';
var H2 = exports.H2 = 'HEADINGS/HEADING-TWO';
var H3 = exports.H3 = 'HEADINGS/HEADING-THREE';
var H4 = exports.H4 = 'HEADINGS/HEADING-FOUR';
var H5 = exports.H5 = 'HEADINGS/HEADING-FIVE';
var H6 = exports.H6 = 'HEADINGS/HEADING-SIX';

var createNode = function createNode(type, el, next) {
  return {
    object: 'block',
    type: type,
    // data: Data.create({ style: el.attribs.style }),
    nodes: next(el.childNodes)
  };
};

var HeadingsPlugin = function (_Plugin) {
  _inherits(HeadingsPlugin, _Plugin);

  function HeadingsPlugin(props) {
    _classCallCheck(this, HeadingsPlugin);

    var _this = _possibleConstructorReturn(this, (HeadingsPlugin.__proto__ || Object.getPrototypeOf(HeadingsPlugin)).call(this, props));

    _initialiseProps.call(_this);

    _this.DEFAULT_NODE = props.DEFAULT_NODE;
    return _this;
  }

  // eslint-disable-next-line react/display-name


  return HeadingsPlugin;
}(_Plugin3.default);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this,
      _nodes;

  this.createButton = function (type, icon) {
    return function (_ref) {
      var editorState = _ref.editorState,
          onChange = _ref.onChange;

      var onClick = function onClick(e) {
        e.preventDefault();

        var isActive = editorState.blocks.some(function (block) {
          return block.type === type;
        });

        onChange({
          value: editorState.change().setBlocks(isActive ? _this2.DEFAULT_NODE : type).value
        });
      };

      var isActive = editorState.blocks.some(function (block) {
        return block.type === type;
      });

      return _react2.default.createElement(_helpers.ToolbarButton, { onClick: onClick, isActive: isActive, icon: icon });
    };
  };

  this.name = 'headings';
  this.schema = {
    nodes: (_nodes = {}, _defineProperty(_nodes, H1, (0, _helpers.makeTagNode)('h1')), _defineProperty(_nodes, H2, (0, _helpers.makeTagNode)('h2')), _defineProperty(_nodes, H3, (0, _helpers.makeTagNode)('h3')), _defineProperty(_nodes, H4, (0, _helpers.makeTagNode)('h4')), _defineProperty(_nodes, H5, (0, _helpers.makeTagNode)('h5')), _defineProperty(_nodes, H6, (0, _helpers.makeTagNode)('h6')), _nodes)
  };
  this.toolbarButtons = [this.createButton(H1, _react2.default.createElement(_LooksOne2.default, null)), this.createButton(H2, _react2.default.createElement(_LooksTwo2.default, null)), this.createButton(H3, _react2.default.createElement(_Looks2.default, null)), this.createButton(H4, _react2.default.createElement(_Looks4.default, null)), this.createButton(H5, _react2.default.createElement(_Looks6.default, null)), this.createButton(H6, _react2.default.createElement(_Looks8.default, null))];

  this.deserialize = function (el, next) {
    switch (el.tagName.toLowerCase()) {
      case 'h1':
        return createNode(H1, el, next);
      case 'h2':
        return createNode(H2, el, next);
      case 'h3':
        return createNode(H3, el, next);
      case 'h4':
        return createNode(H4, el, next);
      case 'h5':
        return createNode(H5, el, next);
      case 'h6':
        return createNode(H6, el, next);
    }
  };

  this.serialize = function (object, children) {
    if (object.object !== 'block') {
      return;
    }
    var style = { textAlign: object.data.get('align') };

    switch (object.type) {
      case H1:
        return _react2.default.createElement(
          'h1',
          { style: style },
          children
        );
      case H2:
        return _react2.default.createElement(
          'h2',
          { style: style },
          children
        );
      case H3:
        return _react2.default.createElement(
          'h3',
          { style: style },
          children
        );
      case H4:
        return _react2.default.createElement(
          'h4',
          { style: style },
          children
        );
      case H5:
        return _react2.default.createElement(
          'h5',
          { style: style },
          children
        );
      case H6:
        return _react2.default.createElement(
          'h6',
          { style: style },
          children
        );
    }
  };

  this.renderNode = function (props) {
    var children = props.children;

    var style = { textAlign: props.node.data.get('align') };
    switch (props.node.type) {
      case H1:
        return _react2.default.createElement(
          'h1',
          { style: style },
          children
        );
      case H2:
        return _react2.default.createElement(
          'h2',
          { style: style },
          children
        );
      case H3:
        return _react2.default.createElement(
          'h3',
          { style: style },
          children
        );
      case H4:
        return _react2.default.createElement(
          'h4',
          { style: style },
          children
        );
      case H5:
        return _react2.default.createElement(
          'h5',
          { style: style },
          children
        );
      case H6:
        return _react2.default.createElement(
          'h6',
          { style: style },
          children
        );
    }
  };
};

exports.default = HeadingsPlugin;
//# sourceMappingURL=headings.js.map