'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BLOCKQUOTE = undefined;

var _FormatQuote = require('@material-ui/icons/FormatQuote');

var _FormatQuote2 = _interopRequireDefault(_FormatQuote);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _slateEditBlockquote = require('slate-edit-blockquote');

var _slateEditBlockquote2 = _interopRequireDefault(_slateEditBlockquote);

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


var BLOCKQUOTE = exports.BLOCKQUOTE = 'BLOCKQUOTE/BLOCKQUOTE';

var BlockquotePlugin = function (_Plugin) {
  _inherits(BlockquotePlugin, _Plugin);

  function BlockquotePlugin(props) {
    _classCallCheck(this, BlockquotePlugin);

    var _this = _possibleConstructorReturn(this, (BlockquotePlugin.__proto__ || Object.getPrototypeOf(BlockquotePlugin)).call(this, props));

    _initialiseProps.call(_this);

    _this.DEFAULT_NODE = props.DEFAULT_NODE;
    return _this;
  }

  // eslint-disable-next-line react/display-name


  return BlockquotePlugin;
}(_Plugin3.default);

var _initialiseProps = function _initialiseProps() {
  this.Button = function (_ref) {
    var editorState = _ref.editorState,
        onChange = _ref.onChange;

    var onClick = function onClick(e) {
      e.preventDefault();

      var isActive = editorState.blocks.some(function (block) {
        return Boolean(editorState.document.getClosest(block.key, function (parent) {
          return parent.type === BLOCKQUOTE;
        }));
      });

      var change = editorState.change();

      if (isActive) {
        change = change.unwrapBlock(BLOCKQUOTE);
      } else {
        change = change.wrapBlock(BLOCKQUOTE);
      }

      onChange({ value: change.value });
    };

    var isActive = editorState.blocks.some(function (block) {
      return Boolean(editorState.document.getClosest(block.key, function (parent) {
        return parent.type === BLOCKQUOTE;
      }));
    });

    return _react2.default.createElement(_helpers.ToolbarButton, {
      onClick: onClick,
      isActive: isActive,
      icon: _react2.default.createElement(_FormatQuote2.default, null)
    });
  };

  this.name = 'blockquote';
  this.schema = {
    nodes: _defineProperty({}, BLOCKQUOTE, (0, _helpers.makeTagNode)('blockquote'))
  };
  this.plugins = [(0, _slateEditBlockquote2.default)({
    type: BLOCKQUOTE,
    typeDefault: this.DEFAULT_NODE
  })];
  this.toolbarButtons = [this.Button];

  this.deserialize = function (el, next) {
    switch (el.tagName.toLowerCase()) {
      case 'blockquote':
        return {
          object: 'block',
          type: BLOCKQUOTE,
          nodes: next(el.childNodes)
        };
    }
  };

  this.serialize = function (object, children) {
    if (object.object !== 'block') {
      return;
    }
    switch (object.type) {
      case BLOCKQUOTE:
        return _react2.default.createElement(
          'blockquote',
          { style: { textAlign: object.data.get('align') } },
          children
        );
    }
  };

  this.renderNode = function (props) {
    switch (props.node.type) {
      case BLOCKQUOTE:
        {
          return _react2.default.createElement(
            'blockquote',
            { style: { textAlign: props.node.data.get('align') } },
            props.children
          );
        }
    }
  };
};

exports.default = BlockquotePlugin;
//# sourceMappingURL=blockquote.js.map